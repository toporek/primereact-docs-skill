# Chip

An unstyled chip component with compound composition for representing entities.

Build fully custom chip elements with complete control over layout and styling.

```tsx
'use client';
import { Times } from '@primeicons/react/times';
import { Chip } from 'primereact/chip';
import styles from './basic-demo.module.css';

export default function BasicDemo() {
    return (
        <div className={styles.wrapper}>
            <Chip.Root className={styles.chip}>
                <Chip.Label>Apple</Chip.Label>
            </Chip.Root>
            <Chip.Root className={styles.chip}>
                <Chip.Start>
                    <img src="https://primefaces.org/cdn/primevue/images/avatar/ionibowcher.png" alt="Ioni" className={styles.avatar} />
                </Chip.Start>
                <Chip.Label>Ioni Bowcher</Chip.Label>
            </Chip.Root>
            <Chip.Root className={styles.chip}>
                <Chip.Label>Removable</Chip.Label>
                <Chip.Remove className={styles.remove}>
                    <Times className="w-3 h-3" />
                </Chip.Remove>
            </Chip.Root>
        </div>
    );
}
```

## Features

- Compound component API with five sub-components: `Root`, `Start`, `Label`, `End`, `Remove`
- Built-in visibility state — chip hides itself when removed
- `onRemove` callback for reacting to dismissal events
- `Remove` sub-component with keyboard support (Enter, Backspace)

## Usage

```tsx
import { Chip } from 'primereact/chip';
```

```tsx
<Chip.Root>
    <Chip.Start />
    <Chip.Label />
    <Chip.End>
        <Chip.Remove />
    </Chip.End>
</Chip.Root>
```

## Behavior

### Polymorphic Rendering

Use `as` on any sub-component to change the rendered HTML element.

```tsx
<Chip.Root as="span">
    <Chip.Label as="span">Tag</Chip.Label>
</Chip.Root>
```

Default elements: `Root`=`div`, `Start`=`div`, `Label`=`div`, `End`=`div`, `Remove`=`span`.

### Render Function Children

Sub-components accept a render function as children, providing access to the component instance.

```tsx
<Chip.Label>{(instance) => <span>{instance.chip?.state.visible ? 'Visible' : 'Hidden'}</span>}</Chip.Label>
```

## Pass Through

**Pass Through example:**

```tsx
'use client';
import { Check, MinusCircle } from '@primeicons/react';
import { Chip } from '@primereact/ui/chip';
import * as React from 'react';

export default function ChipPTDemo() {
    const [selectedIndex, setSelectedIndex] = React.useState([0, 4, 7, 10, 15]);

    const onSelect = (index: number) => {
        if (selectedIndex.includes(index)) {
            setSelectedIndex((prev) => prev.filter((i) => i !== index));
        } else {
            setSelectedIndex((prev) => [...prev, index]);
        }
    };

    return (
        <div className="max-w-xs mx-auto bg-surface-50/25 dark:bg-surface-900/25 p-4 rounded-lg border border-surface">
            <h2 className="font-bold mb-0.5">What are you interested in?</h2>
            <p className="text-surface-500 mb-3 text-sm">You can select multiple answers.</p>
            <div className="flex items-center justify-start flex-wrap gap-2.5">
                {chips.map((chip) => {
                    const isSelected = selectedIndex.includes(chips.indexOf(chip));

                    return (
                        <Chip.Root
                            key={chip.label}
                            onClick={() => onSelect(chips.indexOf(chip))}
                            variant={isSelected ? undefined : 'outlined'}
                            className="cursor-pointer"
                        >
                            <Chip.Start>
                                {isSelected ? (
                                    <span className="size-4.5 inline-flex items-center justify-center bg-surface-900 dark:bg-surface-50 text-surface-0 dark:text-surface-900 rounded-full">
                                        <Check className="size-2.5!" />
                                    </span>
                                ) : (
                                    chip.emoji
                                )}
                            </Chip.Start>
                            <Chip.Label>{chip.label}</Chip.Label>
                            <Chip.End>
                                <Chip.Remove>
                                    <MinusCircle />
                                </Chip.Remove>
                            </Chip.End>
                        </Chip.Root>
                    );
                })}
            </div>
        </div>
    );
}

const chips = [
    { label: 'Music', emoji: '🎵' },
    { label: 'Movies', emoji: '🎬' },
    { label: 'Travel', emoji: '✈️' },
    { label: 'Food', emoji: '🍔' },
    { label: 'Sports', emoji: '⚽' }
];
```

## API

### ChipRoot

> **API/props table for `ChipRoot` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value  |
| ------------ | ------ |
| `data-scope` | `chip` |
| `data-part`  | `root` |

> **API/props table for `ChipRoot` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### ChipStart

> **API/props table for `ChipStart` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `ChipStart` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### ChipLabel

> **API/props table for `ChipLabel` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `ChipLabel` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### ChipEnd

> **API/props table for `ChipEnd` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `ChipEnd` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### ChipRemove

> **API/props table for `ChipRemove` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `ChipRemove` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

### Screen Reader

Chip uses its label content as the default accessible name. Provide `aria-label` or `aria-labelledby` on `Chip.Root` to override. Removable chips have a focusable remove element with `tabIndex="0"`.

### Keyboard Support

| Key         | Function             |
| ----------- | -------------------- |
| `enter`     | Hides removable chip |
| `backspace` | Hides removable chip |
