# InputTags

InputTags groups a collection of contents in items.

```tsx
'use client';
import { Times } from '@primeicons/react/times';
import { Chip } from '@primereact/ui/chip';
import { InputTags, type InputTagsRootValueChangeEvent } from '@primereact/ui/inputtags';
import { InputText } from '@primereact/ui/inputtext';
import { Label } from '@primereact/ui/label';
import * as React from 'react';

export default function Preview() {
    const [tags, setTags] = React.useState<string[]>(['React', 'JavaScript']);

    return (
        <div className="max-w-3xs mx-auto flex flex-col">
            <Label className="mb-2">Frameworks</Label>
            <InputTags.Root value={tags} onValueChange={(e: InputTagsRootValueChangeEvent) => setTags(e.value as string[])}>
                <InputTags.Items>
                    {({ item, remove, itemProps }) => (
                        <Chip.Root {...itemProps} className="data-selected:bg-surface-200! dark:data-selected:bg-surface-700!">
                            <Chip.Label>{item}</Chip.Label>
                            <Chip.Remove onClick={remove}>
                                <Times />
                            </Chip.Remove>
                        </Chip.Root>
                    )}
                </InputTags.Items>
                <InputTags.Control>
                    {({ controlProps }) => <InputText {...controlProps} className="border-none! flex-[1_1_auto]" />}
                </InputTags.Control>
            </InputTags.Root>
        </div>
    );
}

```

## Usage

```tsx
import { InputTags } from '@primereact/ui/inputtags';
import { InputText } from '@primereact/ui/inputtext';
import { Chip } from '@primereact/ui/chip';
```

`InputTags.Items` takes a render-prop child invoked per tag with `{ item, index, remove, itemProps }`. Spread `itemProps` onto the rendered chip for ARIA roles and the `data-selected` focus marker. `InputTags.Control` exposes the text-entry props plus tag-mutation helpers, spread `controlProps` onto any input element.

```tsx
<InputTags.Root value={tags} onValueChange={(e) => setTags(e.value)}>
    <InputTags.Items>
        {({ item, remove, itemProps }) => (
            <Chip.Root {...itemProps}>
                <Chip.Label>{item}</Chip.Label>
                <Chip.Remove onClick={remove}>×</Chip.Remove>
            </Chip.Root>
        )}
    </InputTags.Items>
    <InputTags.Control>{({ controlProps }) => <InputText {...controlProps} />}</InputTags.Control>
</InputTags.Root>
```

For typeahead support, render an `<AutoComplete.Root>` tree inside `<InputTags.Control>` and call `add` from the autocomplete's `onValueChange`. `add` accepts either a single string or an array of strings. Track the InputTags root element via a callback ref + state and pass it to `<AutoComplete.Positioner anchor={...}>` so the popup matches the full field width instead of just the input.

```tsx
const [rootEl, setRootEl] = React.useState<HTMLElement | null>(null);

<InputTags.Root ref={setRootEl} value={skills} onValueChange={(e) => setSkills(e.value)}>
    <InputTags.Items>
        {({ item, remove, itemProps }) => (
            <Chip.Root {...itemProps}>
                <Chip.Label>{item}</Chip.Label>
                <Chip.Remove onClick={remove}>×</Chip.Remove>
            </Chip.Root>
        )}
    </InputTags.Items>
    <InputTags.Control>
        {({ controlProps, add }) => (
            <AutoComplete.Root
                options={items}
                optionLabel="label"
                onComplete={onSearch}
                onValueChange={(e) => {
                    if (e.option) add(e.option.label);
                }}
            >
                <AutoComplete.Input {...controlProps} />
                <AutoComplete.Portal>
                    <AutoComplete.Positioner anchor={rootEl}>
                        <AutoComplete.Popup>
                            <AutoComplete.List />
                        </AutoComplete.Popup>
                    </AutoComplete.Positioner>
                </AutoComplete.Portal>
            </AutoComplete.Root>
        )}
    </InputTags.Control>
</InputTags.Root>;
```

## Examples

### Basic

Allows entering multiple values as removable tags.

```tsx
'use client';
import { Times } from '@primeicons/react/times';
import { Chip } from '@primereact/ui/chip';
import { InputTags, type InputTagsRootValueChangeEvent } from '@primereact/ui/inputtags';
import { InputText } from '@primereact/ui/inputtext';
import * as React from 'react';

export default function BasicDemo() {
    const [tags, setTags] = React.useState<string[]>(['React']);

    return (
        <div className="max-w-2xs mx-auto w-full">
            <InputTags.Root value={tags} onValueChange={(e: InputTagsRootValueChangeEvent) => setTags(e.value as string[])}>
                <InputTags.Items>
                    {({ item, remove, itemProps }) => (
                        <Chip.Root {...itemProps} className="data-selected:bg-surface-200! dark:data-selected:bg-surface-700!">
                            <Chip.Label>{item}</Chip.Label>
                            <Chip.Remove onClick={remove}>
                                <Times />
                            </Chip.Remove>
                        </Chip.Root>
                    )}
                </InputTags.Items>
                <InputTags.Control>
                    {({ controlProps }) => <InputText {...controlProps} className="border-none! flex-[1_1_auto]" />}
                </InputTags.Control>
            </InputTags.Root>
        </div>
    );
}

```

### Delimiter

A new tag is added when `enter` key is pressed, `delimiter` property allows defining an additional key. Currently only valid value is `,` to create a new item when comma key is pressed.

```tsx
'use client';
import { Times } from '@primeicons/react/times';
import { Chip } from '@primereact/ui/chip';
import { InputTags } from '@primereact/ui/inputtags';
import { InputText } from '@primereact/ui/inputtext';

export default function DelimiterDemo() {
    return (
        <div className="max-w-2xs mx-auto w-full">
            <InputTags.Root delimiter=",">
                <InputTags.Items>
                    {({ item, remove, itemProps }) => (
                        <Chip.Root {...itemProps} className="data-selected:bg-surface-200! dark:data-selected:bg-surface-700!">
                            <Chip.Label>{item}</Chip.Label>
                            <Chip.Remove onClick={remove}>
                                <Times />
                            </Chip.Remove>
                        </Chip.Root>
                    )}
                </InputTags.Items>
                <InputTags.Control>
                    {({ controlProps }) => <InputText {...controlProps} className="border-none! flex-[1_1_auto]" />}
                </InputTags.Control>
            </InputTags.Root>
        </div>
    );
}

```

### Allow Duplicate

When `allowDuplicate` is enabled, the same value can be added multiple times as separate tags.

```tsx
'use client';
import { Times } from '@primeicons/react/times';
import { Chip } from '@primereact/ui/chip';
import { InputTags, type InputTagsRootValueChangeEvent } from '@primereact/ui/inputtags';
import { InputText } from '@primereact/ui/inputtext';
import * as React from 'react';

export default function AllowDuplicateDemo() {
    const [tags, setTags] = React.useState<string[]>(['a', 'A', 'a']);

    return (
        <div className="max-w-2xs mx-auto w-full">
            <InputTags.Root value={tags} onValueChange={(e: InputTagsRootValueChangeEvent) => setTags(e.value as string[])} allowDuplicate>
                <InputTags.Items>
                    {({ item, remove, itemProps }) => (
                        <Chip.Root {...itemProps} className="data-selected:bg-surface-200! dark:data-selected:bg-surface-700!">
                            <Chip.Label>{item}</Chip.Label>
                            <Chip.Remove onClick={remove}>
                                <Times />
                            </Chip.Remove>
                        </Chip.Root>
                    )}
                </InputTags.Items>
                <InputTags.Control>
                    {({ controlProps }) => <InputText {...controlProps} className="border-none! flex-[1_1_auto]" />}
                </InputTags.Control>
            </InputTags.Root>
        </div>
    );
}

```

### Max

The `max` property limits the number of tags that can be added. Once the limit is reached, no more tags can be entered.

```tsx
'use client';
import { Times } from '@primeicons/react/times';
import { Chip } from '@primereact/ui/chip';
import { InputTags, type InputTagsRootValueChangeEvent } from '@primereact/ui/inputtags';
import { InputText } from '@primereact/ui/inputtext';
import * as React from 'react';

export default function MaxDemo() {
    const [tags, setTags] = React.useState<string[]>(['React']);

    return (
        <div className="max-w-2xs mx-auto w-full">
            <InputTags.Root value={tags} onValueChange={(e: InputTagsRootValueChangeEvent) => setTags(e.value as string[])} max={5}>
                <InputTags.Items>
                    {({ item, remove, itemProps }) => (
                        <Chip.Root {...itemProps} className="data-selected:bg-surface-200! dark:data-selected:bg-surface-700!">
                            <Chip.Label>{item}</Chip.Label>
                            <Chip.Remove onClick={remove}>
                                <Times />
                            </Chip.Remove>
                        </Chip.Root>
                    )}
                </InputTags.Items>
                <InputTags.Control>
                    {({ controlProps }) => <InputText {...controlProps} className="border-none! flex-[1_1_auto]" />}
                </InputTags.Control>
            </InputTags.Root>
        </div>
    );
}

```

### Item

`InputTags.Items` takes a render-prop child invoked per tag with `{ item, index, remove, itemProps }`. Compose any chip-like JSX inside, `Chip.*`, `Tag`, a plain `<span>`, etc.

```tsx
'use client';
import { Times } from '@primeicons/react';
import { InputTags, type InputTagsRootValueChangeEvent } from '@primereact/ui/inputtags';
import { InputText } from '@primereact/ui/inputtext';
import { Tag } from '@primereact/ui/tag';
import * as React from 'react';

export default function ItemDemo() {
    const [tags, setTags] = React.useState<string[]>(['JavaScript', 'TypeScript']);

    return (
        <div className="max-w-2xs mx-auto w-full">
            <InputTags.Root value={tags} onValueChange={(e: InputTagsRootValueChangeEvent) => setTags(e.value as string[])}>
                <InputTags.Items>
                    {({ item, remove, itemProps }) => (
                        <Tag {...itemProps} className="data-selected:bg-surface-200! dark:data-selected:bg-surface-700!">
                            {item}
                            <Times size={12} className="cursor-pointer ml-2" onClick={remove} />
                        </Tag>
                    )}
                </InputTags.Items>
                <InputTags.Control>
                    {({ controlProps }) => <InputText {...controlProps} className="border-none! flex-[1_1_auto]" />}
                </InputTags.Control>
            </InputTags.Root>
        </div>
    );
}

```

### Typeahead

InputTags composes with `AutoComplete` for typeahead-driven tag entry. Render `<AutoComplete.Root>` inside `<InputTags.Control>`, spread `controlProps` onto `<AutoComplete.Input>`, and call `add(label)` from AC's `onValueChange` when an option is selected. AC's `onComplete` drives filtering; grouped suggestions work via `optionGroupLabel` / `optionGroupChildren` on AC.

```tsx
'use client';
import { Times } from '@primeicons/react/times';
import { AutoComplete, type AutoCompleteCompleteEvent, type AutoCompleteValueChangeEvent } from '@primereact/ui/autocomplete';
import { Chip } from '@primereact/ui/chip';
import { InputTags, type InputTagsRootValueChangeEvent } from '@primereact/ui/inputtags';
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
    const [rootEl, setRootEl] = React.useState<HTMLElement | null>(null);

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

    const onSearch = (e: AutoCompleteCompleteEvent) => setQuery(e.query);

    return (
        <div className="flex justify-center max-w-2xs mx-auto w-full">
            <InputTags.Root
                ref={setRootEl}
                value={skills}
                onValueChange={(e: InputTagsRootValueChangeEvent) => setSkills(e.value as string[])}
                className="w-full md:w-56"
            >
                <InputTags.Items>
                    {({ item, remove, itemProps }) => (
                        <Chip.Root {...itemProps} className="data-selected:bg-surface-200! dark:data-selected:bg-surface-700!">
                            <Chip.Label>{item}</Chip.Label>
                            <Chip.Remove onClick={remove}>
                                <Times />
                            </Chip.Remove>
                        </Chip.Root>
                    )}
                </InputTags.Items>
                <InputTags.Control>
                    {({ controlProps, add }) => (
                        <AutoComplete.Root
                            options={filteredTech}
                            optionLabel="label"
                            optionGroupLabel="label"
                            optionGroupChildren="items"
                            onComplete={onSearch}
                            onValueChange={(e: AutoCompleteValueChangeEvent) => {
                                const option = e.option as Technology;

                                if (option) add(option.label);
                            }}
                        >
                            <AutoComplete.Input {...controlProps} as={InputText} className="border-none!" placeholder="Search technologies..." />
                            <AutoComplete.Portal>
                                <AutoComplete.Positioner anchor={rootEl as HTMLElement} sideOffset={8}>
                                    <AutoComplete.Popup>
                                        <AutoComplete.List style={{ maxHeight: '14rem' }}>
                                            {(() => {
                                                let flatIndex = 0;

                                                return filteredTech.flatMap((category) => [
                                                    <AutoComplete.Option key={`g-${category.code}`} index={flatIndex++} group>
                                                        {category.label}
                                                    </AutoComplete.Option>,
                                                    ...category.items.map((item) => (
                                                        <AutoComplete.Option key={item.value} index={flatIndex++}>
                                                            {item.label}
                                                        </AutoComplete.Option>
                                                    ))
                                                ]);
                                            })()}
                                            <AutoComplete.Empty className="text-sm">No results found</AutoComplete.Empty>
                                        </AutoComplete.List>
                                    </AutoComplete.Popup>
                                </AutoComplete.Positioner>
                            </AutoComplete.Portal>
                        </AutoComplete.Root>
                    )}
                </InputTags.Control>
            </InputTags.Root>
        </div>
    );
}

```

### Events

The `onAdd` and `onRemove` callbacks are triggered when tags are added or removed, providing the tag value and index for custom handling like logging, analytics or validation.

```tsx
'use client';
import { Times } from '@primeicons/react';
import { Chip } from '@primereact/ui/chip';
import { InputTags, type InputTagsRootAddEvent, type InputTagsRootRemoveEvent, type InputTagsRootValueChangeEvent } from '@primereact/ui/inputtags';
import { InputText } from '@primereact/ui/inputtext';
import * as React from 'react';

export default function EventsDemo() {
    const [tags, setTags] = React.useState<string[]>([]);
    const [log, setLog] = React.useState<string[]>([]);

    const onAdd = (e: InputTagsRootAddEvent) => {
        setLog((prev) => [...prev, `added "${e.value}"`].slice(-6));
    };

    const onRemove = (e: InputTagsRootRemoveEvent) => {
        setLog((prev) => [...prev, `removed "${e.value}" at index ${e.index}`].slice(-6));
    };

    return (
        <div className="flex flex-col gap-4 max-w-2xs mx-auto w-full">
            <div className="rounded-md bg-surface-50 dark:bg-surface-900 p-3 font-mono text-xs flex flex-col gap-1 min-h-20">
                {log.length === 0 ? (
                    <span className="text-surface-400">// no events yet</span>
                ) : (
                    log.map((entry, i) => (
                        <span key={`${entry}_${i}`} className="break-all text-surface-600 dark:text-surface-300 flex gap-2">
                            <span className={entry.startsWith('added') ? 'text-green-500' : 'text-red-500'}>
                                {entry.startsWith('added') ? '+' : '-'}
                            </span>
                            {entry}
                        </span>
                    ))
                )}
            </div>
            <InputTags.Root
                value={tags}
                onValueChange={(e: InputTagsRootValueChangeEvent) => setTags(e.value as string[])}
                onAdd={onAdd}
                onRemove={onRemove}
            >
                <InputTags.Items>
                    {({ item, remove, itemProps }) => (
                        <Chip.Root {...itemProps} className="data-selected:bg-surface-200! dark:data-selected:bg-surface-700!">
                            <Chip.Label>{item}</Chip.Label>
                            <Chip.Remove onClick={remove}>
                                <Times />
                            </Chip.Remove>
                        </Chip.Root>
                    )}
                </InputTags.Items>
                <InputTags.Control>
                    {({ controlProps }) => (
                        <InputText {...controlProps} className="border-none! flex-[1_1_auto]" placeholder="Add tags and watch the event log..." />
                    )}
                </InputTags.Control>
            </InputTags.Root>
        </div>
    );
}

```

### Float Label

A floating label is displayed when the input is focused or filled.

```tsx
'use client';
import { Times } from '@primeicons/react/times';
import { Chip } from '@primereact/ui/chip';
import { FloatLabel } from '@primereact/ui/floatlabel';
import { InputTags, type InputTagsRootValueChangeEvent } from '@primereact/ui/inputtags';
import { InputText } from '@primereact/ui/inputtext';
import { Label } from '@primereact/ui/label';
import * as React from 'react';

export default function FloatLabelDemo() {
    const [tags, setTags] = React.useState<string[]>([]);

    return (
        <div className="max-w-2xs mx-auto w-full">
            <FloatLabel>
                <InputTags.Root value={tags} onValueChange={(e: InputTagsRootValueChangeEvent) => setTags(e.value as string[])}>
                    <InputTags.Items>
                        {({ item, remove, itemProps }) => (
                            <Chip.Root {...itemProps} className="data-selected:bg-surface-200! dark:data-selected:bg-surface-700!">
                                <Chip.Label>{item}</Chip.Label>
                                <Chip.Remove onClick={remove}>
                                    <Times />
                                </Chip.Remove>
                            </Chip.Root>
                        )}
                    </InputTags.Items>
                    <InputTags.Control>
                        {({ controlProps }) => <InputText {...controlProps} className="border-none! flex-[1_1_auto]" id="over_label" />}
                    </InputTags.Control>
                </InputTags.Root>
                <Label htmlFor="over_label">Technologies</Label>
            </FloatLabel>
        </div>
    );
}

```

### Filled

Specify the `variant` property as `filled` to display the component with a higher visual emphasis than the default `outlined` style.

```tsx
'use client';
import { Times } from '@primeicons/react/times';
import { Chip } from '@primereact/ui/chip';
import { InputTags, InputTagsRootValueChangeEvent } from '@primereact/ui/inputtags';
import { InputText } from '@primereact/ui/inputtext';
import * as React from 'react';

export default function FilledDemo() {
    const [tags, setTags] = React.useState<string[]>(['React']);

    return (
        <div className="max-w-2xs mx-auto w-full">
            <InputTags.Root value={tags} onValueChange={(e: InputTagsRootValueChangeEvent) => setTags(e.value as string[])} variant="filled">
                <InputTags.Items>
                    {({ item, remove, itemProps }) => (
                        <Chip.Root {...itemProps} className="data-selected:bg-surface-200! dark:data-selected:bg-surface-700!">
                            <Chip.Label>{item}</Chip.Label>
                            <Chip.Remove onClick={remove}>
                                <Times />
                            </Chip.Remove>
                        </Chip.Root>
                    )}
                </InputTags.Items>
                <InputTags.Control>
                    {({ controlProps }) => <InputText {...controlProps} className="border-none! flex-[1_1_auto]" />}
                </InputTags.Control>
            </InputTags.Root>
        </div>
    );
}

```

### Invalid

Invalid state is displayed using the `invalid` prop to indicate a failed validation. This style is useful when integrating with form validation libraries.

```tsx
'use client';
import { Times } from '@primeicons/react/times';
import { Chip } from '@primereact/ui/chip';
import { InputTags, InputTagsRootValueChangeEvent } from '@primereact/ui/inputtags';
import { InputText } from '@primereact/ui/inputtext';
import * as React from 'react';

export default function InvalidDemo() {
    const [tags, setTags] = React.useState<string[]>([]);

    return (
        <div className="max-w-2xs mx-auto w-full">
            <InputTags.Root
                value={tags}
                invalid={tags.length === 0}
                onValueChange={(e: InputTagsRootValueChangeEvent) => setTags(e.value as string[])}
            >
                <InputTags.Items>
                    {({ item, remove, itemProps }) => (
                        <Chip.Root {...itemProps} className="data-selected:bg-surface-200! dark:data-selected:bg-surface-700!">
                            <Chip.Label>{item}</Chip.Label>
                            <Chip.Remove onClick={remove}>
                                <Times />
                            </Chip.Remove>
                        </Chip.Root>
                    )}
                </InputTags.Items>
                <InputTags.Control>
                    {({ controlProps }) => <InputText {...controlProps} className="border-none! flex-[1_1_auto]" />}
                </InputTags.Control>
            </InputTags.Root>
        </div>
    );
}

```

### Disabled

When `disabled` is present, the element cannot be edited and focused.

```tsx
'use client';
import { Times } from '@primeicons/react/times';
import { Chip } from '@primereact/ui/chip';
import { InputTags } from '@primereact/ui/inputtags';
import { InputText } from '@primereact/ui/inputtext';

export default function DisabledDemo() {
    return (
        <div className="max-w-2xs mx-auto w-full">
            <InputTags.Root defaultValue={['React']} disabled>
                <InputTags.Items>
                    {({ item, remove, itemProps }) => (
                        <Chip.Root {...itemProps} className="data-selected:bg-surface-200! dark:data-selected:bg-surface-700!">
                            <Chip.Label>{item}</Chip.Label>
                            <Chip.Remove onClick={remove}>
                                <Times />
                            </Chip.Remove>
                        </Chip.Root>
                    )}
                </InputTags.Items>
                <InputTags.Control>
                    {({ controlProps }) => <InputText {...controlProps} className="border-none! flex-[1_1_auto]" />}
                </InputTags.Control>
            </InputTags.Root>
        </div>
    );
}

```

## Related

### Sub-Components

See [Primitive API](../../primitive/components/inputtags.md#api) for `InputTagsRoot`, `InputTagsItems`, and `InputTagsControl` documentation.

### Hooks

See [Headless API](../../headless/components/inputtags.md#api) for `useInputTags` hook documentation.

### Accessibility

See [InputTags Primitive](../../primitive/components/inputtags.md#accessibility) for WAI-ARIA compliance details and keyboard support.

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-inputtags | Class name of the root element |

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| inputchips.background | --p-inputchips-background | Background of root |
| inputchips.disabled.background | --p-inputchips-disabled-background | Disabled background of root |
| inputchips.filled.background | --p-inputchips-filled-background | Filled background of root |
| inputchips.filled.focus.background | --p-inputchips-filled-focus-background | Filled focus background of root |
| inputchips.border.color | --p-inputchips-border-color | Border color of root |
| inputchips.hover.border.color | --p-inputchips-hover-border-color | Hover border color of root |
| inputchips.focus.border.color | --p-inputchips-focus-border-color | Focus border color of root |
| inputchips.invalid.border.color | --p-inputchips-invalid-border-color | Invalid border color of root |
| inputchips.color | --p-inputchips-color | Color of root |
| inputchips.disabled.color | --p-inputchips-disabled-color | Disabled color of root |
| inputchips.placeholder.color | --p-inputchips-placeholder-color | Placeholder color of root |
| inputchips.shadow | --p-inputchips-shadow | Shadow of root |
| inputchips.padding.x | --p-inputchips-padding-x | Padding x of root |
| inputchips.padding.y | --p-inputchips-padding-y | Padding y of root |
| inputchips.border.radius | --p-inputchips-border-radius | Border radius of root |
| inputchips.focus.ring.width | --p-inputchips-focus-ring-width | Focus ring width of root |
| inputchips.focus.ring.style | --p-inputchips-focus-ring-style | Focus ring style of root |
| inputchips.focus.ring.color | --p-inputchips-focus-ring-color | Focus ring color of root |
| inputchips.focus.ring.offset | --p-inputchips-focus-ring-offset | Focus ring offset of root |
| inputchips.focus.ring.shadow | --p-inputchips-focus-ring-shadow | Focus ring shadow of root |
| inputchips.transition.duration | --p-inputchips-transition-duration | Transition duration of root |
| inputchips.chip.border.radius | --p-inputchips-chip-border-radius | Border radius of chip |
| inputchips.chip.focus.background | --p-inputchips-chip-focus-background | Focus background of chip |
| inputchips.chip.color | --p-inputchips-chip-color | Color of chip |
