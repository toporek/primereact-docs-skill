# CheckboxGroup

CheckboxGroup groups multiple checkboxes and manages their shared value.

```tsx
'use client';
import { Check } from '@primeicons/react/check';
import { Checkbox } from '@primereact/ui/checkbox';
import { CheckboxGroup, type CheckboxGroupChangeEvent } from '@primereact/ui/checkboxgroup';
import React from 'react';

const options = [
    { label: 'Gemini', value: 'gemini' },
    { label: 'Claude', value: 'claude' },
    { label: 'ChatGPT', value: 'chatgpt' },
    { label: 'Deepseek', value: 'deepseek' }
];

export default function Preview() {
    const [value, setValue] = React.useState<string[]>();

    return (
        <div className="flex items-center justify-center">
            <div className="p-1 rounded-2xl bg-surface-100 dark:bg-surface-900 max-w-3xs">
                <div className="pl-4 pt-2 pb-2.5 text-sm font-semibold text-surface-500">Survey</div>
                <div className="p-4 rounded-xl bg-surface-0 dark:bg-surface-950">
                    <div className="mb-3 text-color">Which LLM provider should we integrate next?</div>
                    <CheckboxGroup
                        defaultValue={['Cheese']}
                        value={value}
                        onValueChange={(e: CheckboxGroupChangeEvent) => setValue(e.value as string[])}
                        className="flex-col gap-2"
                    >
                        {options.map((option) => (
                            <div key={option.value} className="flex items-center gap-3">
                                <Checkbox.Root inputId={option.value} value={option.value}>
                                    <Checkbox.Box>
                                        <Checkbox.Indicator match="checked">
                                            <Check />
                                        </Checkbox.Indicator>
                                    </Checkbox.Box>
                                </Checkbox.Root>
                                <label htmlFor={option.value} className="text-surface-500 dark:text-surface-400 font-normal text-base">
                                    {option.label}
                                </label>
                            </div>
                        ))}
                    </CheckboxGroup>
                </div>
            </div>
        </div>
    );
}

```

## Usage

```tsx
import { Checkbox } from '@primereact/ui/checkbox';
import { CheckboxGroup } from '@primereact/ui/checkboxgroup';
```

```tsx
<CheckboxGroup></CheckboxGroup>
```

## Examples

### Basic

A group of checkboxes sharing a common value array.

```tsx
'use client';
import { Check } from '@primeicons/react/check';
import { Checkbox } from '@primereact/ui/checkbox';
import { CheckboxGroup, type CheckboxGroupChangeEvent } from '@primereact/ui/checkboxgroup';
import { Label } from '@primereact/ui/label';
import React from 'react';

export default function BasicDemo() {
    const [value, setValue] = React.useState<string[]>();

    return (
        <div className="flex items-center justify-center">
            <CheckboxGroup
                defaultValue={['Cheese']}
                value={value}
                onValueChange={(e: CheckboxGroupChangeEvent) => setValue(e.value as string[])}
                className="gap-4 flex-wrap"
            >
                <div className="flex items-center gap-2">
                    <Checkbox.Root inputId="cheese" value="Cheese">
                        <Checkbox.Box>
                            <Checkbox.Indicator match="checked">
                                <Check />
                            </Checkbox.Indicator>
                        </Checkbox.Box>
                    </Checkbox.Root>
                    <Label htmlFor="cheese">Cheese</Label>
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox.Root inputId="mushroom" value="Mushroom">
                        <Checkbox.Box>
                            <Checkbox.Indicator match="checked">
                                <Check />
                            </Checkbox.Indicator>
                        </Checkbox.Box>
                    </Checkbox.Root>
                    <Label htmlFor="mushroom">Mushroom</Label>
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox.Root inputId="pepper" value="Pepper">
                        <Checkbox.Box>
                            <Checkbox.Indicator match="checked">
                                <Check />
                            </Checkbox.Indicator>
                        </Checkbox.Box>
                    </Checkbox.Root>
                    <Label htmlFor="pepper">Pepper</Label>
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox.Root inputId="onion" value="Onion">
                        <Checkbox.Box>
                            <Checkbox.Indicator match="checked">
                                <Check />
                            </Checkbox.Indicator>
                        </Checkbox.Box>
                    </Checkbox.Root>
                    <Label htmlFor="onion">Onion</Label>
                </div>
            </CheckboxGroup>
        </div>
    );
}

```

### Dynamic

Checkboxes can be generated using a list of values.

```tsx
'use client';
import { Checkbox } from '@primereact/ui/checkbox';
import { CheckboxGroup, type CheckboxGroupChangeEvent } from '@primereact/ui/checkboxgroup';
import { Label } from '@primereact/ui/label';
import React from 'react';
import { Check } from '@primeicons/react/check';

export default function DynamicDemo() {
    const [value, setValue] = React.useState<string[]>([]);
    const categories = [
        { name: 'Accounting', key: 'A' },
        { name: 'Marketing', key: 'M' },
        { name: 'Production', key: 'P' },
        { name: 'Research', key: 'R' }
    ];

    return (
        <div className="flex items-center justify-center">
            <CheckboxGroup value={value} onValueChange={(e: CheckboxGroupChangeEvent) => setValue(e.value as string[])} className="flex-col gap-4">
                {categories.map((category) => (
                    <div key={category.key} className="flex items-center gap-2">
                        <Checkbox.Root inputId={category.key} value={category.key}>
                            <Checkbox.Box>
                                <Checkbox.Indicator match="checked">
                                    <Check />
                                </Checkbox.Indicator>
                            </Checkbox.Box>
                        </Checkbox.Root>
                        <Label htmlFor={category.key}>{category.name}</Label>
                    </div>
                ))}
            </CheckboxGroup>
        </div>
    );
}

```

### Card

Checkboxes can be displayed in a card format.

```tsx
'use client';
import { Check } from '@primeicons/react/check';
import { Checkbox } from '@primereact/ui/checkbox';
import { CheckboxGroup, type CheckboxGroupChangeEvent } from '@primereact/ui/checkboxgroup';
import React from 'react';

const interests = [
    {
        id: 'tech',
        title: '💻 Technology',
        description: 'Latest updates in software, gadgets, and innovation.'
    },
    {
        id: 'design',
        title: '🎨 Design',
        description: 'UI/UX trends, graphic design tips, and creativity.'
    },
    {
        id: 'finance',
        title: '💰 Finance',
        description: 'Investing, saving, and crypto news.'
    }
];

export default function CardDemo() {
    const [value, setValue] = React.useState<string[]>([]);

    return (
        <div className="max-w-3xl mx-auto">
            <h5 className="font-medium">Select your interests:</h5>
            <CheckboxGroup
                value={value}
                onValueChange={(e: CheckboxGroupChangeEvent) => setValue(e.value as string[])}
                className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4"
            >
                {interests.map((interest) => (
                    <label
                        key={interest.id}
                        className={`flex-1 select-none flex items-start gap-3 p-4 rounded-md border  hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors cursor-pointer ${value.includes(interest.id) ? 'border-primary' : 'border-surface'}`}
                    >
                        <Checkbox.Root key={interest.id} value={interest.id}>
                            <Checkbox.Box>
                                <Checkbox.Indicator match="checked">
                                    <Check />
                                </Checkbox.Indicator>
                            </Checkbox.Box>
                        </Checkbox.Root>
                        <div className="flex-1 flex flex-col gap-2">
                            <h6 className="font-medium leading-none">{interest.title}</h6>
                            <p className="text-sm text-surface-500">{interest.description}</p>
                        </div>
                    </label>
                ))}
            </CheckboxGroup>
        </div>
    );
}

```

### Indeterminate

Use `indeterminate` on a `Checkbox.Root` (typically a parent/select-all option) to display a partial selection state.

```tsx
'use client';
import { Checkbox, type CheckboxRootChangeEvent } from '@primereact/ui/checkbox';
import { CheckboxGroup, type CheckboxGroupChangeEvent } from '@primereact/ui/checkboxgroup';
import { Label } from '@primereact/ui/label';
import React from 'react';
import { Check } from '@primeicons/react/check';
import { Minus } from '@primeicons/react/minus';

const categories = [
    { name: 'Product updates', key: 'product-updates' },
    { name: 'Weekly newsletter', key: 'weekly-newsletter' },
    { name: 'Security alerts', key: 'security-alerts' }
];

export default function IndeterminateDemo() {
    const [value, setValue] = React.useState<string[]>([]);

    const isAllSelected = categories.every((category) => value.includes(category.key));
    const indeterminate = categories.some((category) => value.includes(category.key)) && !isAllSelected;

    return (
        <div className="flex items-center justify-center">
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                    <Checkbox.Root
                        inputId="indeterminate-checkbox"
                        indeterminate={indeterminate}
                        checked={isAllSelected}
                        onCheckedChange={(e: CheckboxRootChangeEvent) => setValue(e.checked ? categories.map((category) => category.key) : [])}
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
                    <Label htmlFor="indeterminate-checkbox">Email Notifications</Label>
                </div>
                <CheckboxGroup
                    value={value}
                    onValueChange={(e: CheckboxGroupChangeEvent) => setValue(e.value as string[])}
                    className="flex-col gap-4 pl-7"
                >
                    {categories.map((item) => (
                        <div key={item.key} className="flex items-center gap-2">
                            <Checkbox.Root inputId={item.key} value={item.key}>
                                <Checkbox.Box>
                                    <Checkbox.Indicator match="checked">
                                        <Check />
                                    </Checkbox.Indicator>
                                </Checkbox.Box>
                            </Checkbox.Root>
                            <Label htmlFor={item.key}>{item.name}</Label>
                        </div>
                    ))}
                </CheckboxGroup>
            </div>
        </div>
    );
}

```

### Nested Group

Use nested groups to manage team-level and permission-level selections in access control flows.

```tsx
'use client';
import { Check } from '@primeicons/react/check';
import { Minus } from '@primeicons/react/minus';
import { Checkbox, type CheckboxRootChangeEvent } from '@primereact/ui/checkbox';
import { CheckboxGroup, type CheckboxGroupChangeEvent } from '@primereact/ui/checkboxgroup';
import { Label } from '@primereact/ui/label';
import * as React from 'react';

const permissionGroups = [
    {
        key: 'content',
        label: 'Content',
        description: 'Manage articles, pages, and media',
        permissions: [
            { label: 'Create & edit posts', value: 'content:edit' },
            { label: 'Publish posts', value: 'content:publish' },
            { label: 'Delete posts', value: 'content:delete' }
        ]
    },
    {
        key: 'users',
        label: 'Users',
        description: 'Manage team members and roles',
        permissions: [
            { label: 'Invite members', value: 'users:invite' },
            { label: 'Assign roles', value: 'users:roles' },
            { label: 'Remove members', value: 'users:remove' }
        ]
    },
    {
        key: 'billing',
        label: 'Billing',
        description: 'View invoices and manage payments',
        permissions: [
            { label: 'View invoices', value: 'billing:view' },
            { label: 'Manage payment methods', value: 'billing:payments' },
            { label: 'Download receipts', value: 'billing:download' }
        ]
    }
];

const allPermissionValues = permissionGroups.flatMap((group) => group.permissions.map((p) => p.value));

export default function NestedGroupDemo() {
    const [value, setValue] = React.useState<string[]>(['content:edit', 'content:publish', 'users:invite']);

    const isAllSelected = allPermissionValues.every((v) => value.includes(v));
    const isAllIndeterminate = value.length > 0 && !isAllSelected;

    const handleAllChange = React.useCallback((event: CheckboxRootChangeEvent) => {
        setValue(event.checked ? [...allPermissionValues] : []);
    }, []);

    const handleGroupChange = React.useCallback((groupKey: string, checked: boolean) => {
        const group = permissionGroups.find((g) => g.key === groupKey);

        if (!group) return;

        const groupValues = group.permissions.map((p) => p.value);

        setValue((prev) => (checked ? Array.from(new Set([...prev, ...groupValues])) : prev.filter((v) => !groupValues.includes(v))));
    }, []);

    const handleGroupValueChange = React.useCallback((groupKey: string, event: CheckboxGroupChangeEvent) => {
        const group = permissionGroups.find((g) => g.key === groupKey);

        if (!group) return;

        const groupValues = group.permissions.map((p) => p.value);
        const newGroupValue = event.value as string[];

        setValue((prev) => [...prev.filter((v) => !groupValues.includes(v)), ...newGroupValue]);
    }, []);

    return (
        <div className="flex items-center justify-center">
            <div className="flex flex-col gap-5 w-full max-w-lg">
                <div className="flex items-center gap-2">
                    <Checkbox.Root
                        inputId="permission-all"
                        checked={isAllSelected}
                        indeterminate={isAllIndeterminate}
                        onCheckedChange={handleAllChange}
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
                    <Label htmlFor="permission-all" className="font-semibold">
                        All Permissions
                    </Label>
                </div>

                <div className="flex flex-col gap-4 pl-7">
                    {permissionGroups.map((group, index) => {
                        const groupValues = group.permissions.map((p) => p.value);
                        const selectedGroupValues = value.filter((v) => groupValues.includes(v));
                        const isGroupSelected = groupValues.every((v) => value.includes(v));
                        const isGroupIndeterminate = groupValues.some((v) => value.includes(v)) && !isGroupSelected;

                        return (
                            <React.Fragment key={group.key}>
                                {index > 0 && <div className="border-t border-surface -mx-1" />}
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-2">
                                        <Checkbox.Root
                                            inputId={`permission-group-${group.key}`}
                                            checked={isGroupSelected}
                                            indeterminate={isGroupIndeterminate}
                                            onCheckedChange={(event: CheckboxRootChangeEvent) => handleGroupChange(group.key, !!event.checked)}
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
                                        <div className="flex flex-col">
                                            <Label htmlFor={`permission-group-${group.key}`} className="font-medium">
                                                {group.label}
                                            </Label>
                                            <span className="text-sm text-muted-color">{group.description}</span>
                                        </div>
                                    </div>

                                    <CheckboxGroup
                                        value={selectedGroupValues}
                                        onValueChange={(event: CheckboxGroupChangeEvent) => handleGroupValueChange(group.key, event)}
                                        className="flex-col gap-2 pl-7"
                                    >
                                        {group.permissions.map((permission) => (
                                            <div key={permission.value} className="flex items-center gap-2">
                                                <Checkbox.Root inputId={permission.value} value={permission.value}>
                                                    <Checkbox.Box>
                                                        <Checkbox.Indicator match="checked">
                                                            <Check />
                                                        </Checkbox.Indicator>
                                                    </Checkbox.Box>
                                                </Checkbox.Root>
                                                <Label htmlFor={permission.value}>{permission.label}</Label>
                                            </div>
                                        ))}
                                    </CheckboxGroup>
                                </div>
                            </React.Fragment>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

```

### Indicator

Use `Checkbox.Indicator` in each group item to render the checked state.

```tsx
'use client';
import { Check } from '@primeicons/react/check';
import { Minus } from '@primeicons/react/minus';
import { Times } from '@primeicons/react/times';
import { Checkbox, type CheckboxRootChangeEvent } from '@primereact/ui/checkbox';
import { CheckboxGroup, type CheckboxGroupChangeEvent } from '@primereact/ui/checkboxgroup';
import { Label } from '@primereact/ui/label';
import * as React from 'react';

const options = [
    { label: 'Design', value: 'design' },
    { label: 'Development', value: 'development' },
    { label: 'Marketing', value: 'marketing' }
];

export default function IndicatorDemo() {
    const [value, setValue] = React.useState<string[]>(['design']);

    const isAllSelected = options.every((option) => value.includes(option.value));
    const indeterminate = value.length > 0 && !isAllSelected;

    return (
        <div className="flex items-center justify-center">
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                    <Checkbox.Root
                        inputId="checkboxgroup-indicator-parent"
                        checked={isAllSelected}
                        indeterminate={indeterminate}
                        onCheckedChange={(event: CheckboxRootChangeEvent) => setValue(event.checked ? options.map((option) => option.value) : [])}
                    >
                        <Checkbox.Box>
                            <Checkbox.Indicator match="checked">
                                <Check />
                            </Checkbox.Indicator>
                            <Checkbox.Indicator match="unchecked">
                                <Times />
                            </Checkbox.Indicator>
                            <Checkbox.Indicator match="indeterminate">
                                <Minus />
                            </Checkbox.Indicator>
                        </Checkbox.Box>
                    </Checkbox.Root>
                    <Label htmlFor="checkboxgroup-indicator-parent">Select all</Label>
                </div>

                <CheckboxGroup
                    value={value}
                    onValueChange={(event: CheckboxGroupChangeEvent) => setValue(event.value as string[])}
                    className="flex-col gap-3 pl-7"
                >
                    {options.map((option) => (
                        <div key={option.value} className="flex items-center gap-2">
                            <Checkbox.Root inputId={option.value} value={option.value}>
                                <Checkbox.Box>
                                    <Checkbox.Indicator match="checked">
                                        <Check />
                                    </Checkbox.Indicator>
                                    <Checkbox.Indicator match="unchecked">
                                        <Times />
                                    </Checkbox.Indicator>
                                </Checkbox.Box>
                            </Checkbox.Root>
                            <Label htmlFor={option.value}>{option.label}</Label>
                        </div>
                    ))}
                </CheckboxGroup>
            </div>
        </div>
    );
}

```

`Checkbox.Indicator` also accepts a `match` prop to render based on the checkbox state.

```tsx
<Checkbox.Root indeterminate>
    <Checkbox.Box>
        <Checkbox.Indicator match="checked">
            <Check />
        </Checkbox.Indicator>
        <Checkbox.Indicator match="unchecked">
            <Times />
        </Checkbox.Indicator>
        <Checkbox.Indicator match="indeterminate">
            <Minus />
        </Checkbox.Indicator>
    </Checkbox.Box>
</Checkbox.Root>
```

Available `match` values: `checked`, `unchecked`, `indeterminate`. Without the `match` prop, the indicator renders in all states.

## Accessibility

### Screen Reader

Each option in `CheckboxGroup` is announced as a checkbox by assistive technologies. Associate labels with `inputId` + `<label htmlFor>` or provide `aria-label` / `aria-labelledby` on each `Checkbox.Root`.

### Keyboard Support

| Key     | Function                            |
| ------- | ----------------------------------- |
| `tab`   | Moves focus to the next checkbox.   |
| `space` | Toggles checked or unchecked state. |

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-checkbox-group | Class name of the root element |

### Design Tokens

List of design tokens.

> **`CheckboxGroup` API table (`token`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/styled/components/checkboxgroup or the installed `@primereact/types`.
