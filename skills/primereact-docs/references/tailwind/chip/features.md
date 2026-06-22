# Chip

Chip represents entities using icons, labels and images.

```tsx
'use client';
import { Check } from '@primeicons/react';
import { Chip, ChipLabel, ChipStart } from '@/components/ui/chip';
import * as React from 'react';

const chips = [
    { label: 'Music', emoji: '🎵' },
    { label: 'Movies', emoji: '🎬' },
    { label: 'Travel', emoji: '✈️' },
    { label: 'Food', emoji: '🍔' },
    { label: 'Sports', emoji: '⚽' },
    { label: 'Gaming', emoji: '🎮' },
    { label: 'Reading', emoji: '📚' },
    { label: 'Photography', emoji: '📸' },
    { label: 'Fitness', emoji: '💪' },
    { label: 'Technology', emoji: '💻' },
    { label: 'Art', emoji: '🎨' },
    { label: 'Nature', emoji: '🌿' },
    { label: 'Shopping', emoji: '🛍️' },
    { label: 'Cooking', emoji: '👨‍🍳' },
    { label: 'Pets', emoji: '🐶' },
    { label: 'Cars', emoji: '🚗' },
    { label: 'Fashion', emoji: '👕' },
    { label: 'Science', emoji: '🔬' }
];

export default function Preview() {
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
                {chips.map((chip, index) => {
                    const isSelected = selectedIndex.includes(index);

                    return (
                        <Chip
                            key={chip.label}
                            onClick={() => onSelect(index)}
                            variant={isSelected ? undefined : 'outlined'}
                            className="cursor-pointer"
                        >
                            <ChipStart>
                                {isSelected ? (
                                    <span className="size-4.5 inline-flex items-center justify-center bg-surface-900 dark:bg-surface-50 text-surface-0 dark:text-surface-900 rounded-full">
                                        <Check className="size-2.5!" />
                                    </span>
                                ) : (
                                    chip.emoji
                                )}
                            </ChipStart>
                            <ChipLabel>{chip.label}</ChipLabel>
                        </Chip>
                    );
                })}
            </div>
        </div>
    );
}
```

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add @primereact/chip
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { Chip, ChipLabel, ChipStart, ChipEnd, ChipRemove } from '@/components/ui/chip';
```

```tsx
<Chip>
    <ChipStart />
    <ChipLabel>Label</ChipLabel>
    <ChipEnd>
        <ChipRemove />
    </ChipEnd>
</Chip>
```

## Examples

### Basic

Displays compact information with an optional remove action.

```tsx
'use client';
import { Check } from '@primeicons/react';
import { Chip, ChipLabel, ChipStart } from '@/components/ui/chip';
import * as React from 'react';

export default function BasicDemo() {
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
                        <Chip
                            key={chip.label}
                            onClick={() => onSelect(chips.indexOf(chip))}
                            variant={isSelected ? undefined : 'outlined'}
                            className="cursor-pointer"
                        >
                            <ChipStart>
                                {isSelected ? (
                                    <span className="size-4.5 inline-flex items-center justify-center bg-surface-900 dark:bg-surface-50 text-surface-0 dark:text-surface-900 rounded-full">
                                        <Check className="size-2.5!" />{' '}
                                    </span>
                                ) : (
                                    chip.emoji
                                )}
                            </ChipStart>
                            <ChipLabel>{chip.label}</ChipLabel>
                        </Chip>
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
    { label: 'Sports', emoji: '⚽' },
    { label: 'Gaming', emoji: '🎮' },
    { label: 'Reading', emoji: '📚' },
    { label: 'Photography', emoji: '📸' },
    { label: 'Fitness', emoji: '💪' },
    { label: 'Technology', emoji: '💻' },
    { label: 'Art', emoji: '🎨' },
    { label: 'Nature', emoji: '🌿' },
    { label: 'Shopping', emoji: '🛍️' },
    { label: 'Cooking', emoji: '👨‍🍳' },
    { label: 'Pets', emoji: '🐶' },
    { label: 'Cars', emoji: '🚗' },
    { label: 'Fashion', emoji: '👕' },
    { label: 'Science', emoji: '🔬' }
];
```

### Variant

```tsx
import { Github, MinusCircle } from '@primeicons/react';
import { Chip, ChipEnd, ChipLabel, ChipRemove, ChipStart } from '@/components/ui/chip';

export default function VariantDemo() {
    return (
        <div className="flex items-center justify-center flex-wrap gap-2">
            <Chip>
                <ChipStart>
                    <Github />
                </ChipStart>
                <ChipLabel>GitHub</ChipLabel>
                <ChipEnd>
                    <ChipRemove>
                        <MinusCircle />
                    </ChipRemove>
                </ChipEnd>
            </Chip>
            <Chip variant="outlined">
                <ChipStart>
                    <Github />
                </ChipStart>
                <ChipLabel>GitHub</ChipLabel>
                <ChipEnd>
                    <ChipRemove>
                        <MinusCircle />
                    </ChipRemove>
                </ChipEnd>
            </Chip>
            <Chip variant="text">
                <ChipStart>
                    <Github />
                </ChipStart>
                <ChipLabel>GitHub</ChipLabel>
                <ChipEnd>
                    <ChipRemove>
                        <MinusCircle />
                    </ChipRemove>
                </ChipEnd>
            </Chip>
        </div>
    );
}
```

### Start & End Elements

```tsx
import { Apple, Facebook, Github, Google, Microsoft, MinusCircle } from '@primeicons/react';
import { Chip, ChipEnd, ChipLabel, ChipRemove, ChipStart } from '@/components/ui/chip';

export default function StartEndDemo() {
    return (
        <div className="flex items-center justify-center flex-wrap gap-2">
            <Chip>
                <ChipStart>
                    <Apple />
                </ChipStart>
                <ChipLabel>Apple</ChipLabel>
            </Chip>
            <Chip>
                <ChipStart>
                    <Facebook />
                </ChipStart>
                <ChipLabel>Facebook</ChipLabel>
            </Chip>
            <Chip>
                <ChipStart>
                    <Google />
                </ChipStart>
                <ChipLabel>Google</ChipLabel>
            </Chip>
            <Chip>
                <ChipStart>
                    <Microsoft />
                </ChipStart>
                <ChipLabel>Microsoft</ChipLabel>
            </Chip>
            <Chip>
                <ChipStart>
                    <Github />
                </ChipStart>
                <ChipLabel>GitHub</ChipLabel>
                <ChipEnd>
                    <ChipRemove>
                        <MinusCircle />
                    </ChipRemove>
                </ChipEnd>
            </Chip>
        </div>
    );
}
```

### With Avatar

```tsx
import { TimesCircle } from '@primeicons/react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Chip, ChipEnd, ChipLabel, ChipRemove, ChipStart } from '@/components/ui/chip';

export default function WithAvatarDemo() {
    return (
        <div className="flex items-center justify-center flex-wrap gap-2">
            <Chip>
                <ChipStart>
                    <Avatar className="size-full" shape="circle">
                        <AvatarImage src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" />
                        <AvatarFallback className="text-xs">AE</AvatarFallback>
                    </Avatar>
                </ChipStart>
                <ChipLabel>Amy Elsner</ChipLabel>
            </Chip>
            <Chip>
                <ChipStart>
                    <Avatar className="size-full" shape="circle">
                        <AvatarImage src="https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png" />
                        <AvatarFallback className="text-xs">AJ</AvatarFallback>
                    </Avatar>
                </ChipStart>
                <ChipLabel>Asiya Javayant</ChipLabel>
            </Chip>
            <Chip>
                <ChipLabel>Onyama Limba</ChipLabel>
                <ChipEnd>
                    <Avatar className="size-full" shape="circle">
                        <AvatarImage src="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" />
                        <AvatarFallback className="text-xs">OL</AvatarFallback>
                    </Avatar>
                </ChipEnd>
            </Chip>
            <Chip>
                <ChipStart>
                    <Avatar className="size-full" shape="circle">
                        <AvatarImage src="https://primefaces.org/cdn/primevue/images/avatar/xuxuefeng.png" />
                        <AvatarFallback className="text-xs">XF</AvatarFallback>
                    </Avatar>
                </ChipStart>
                <ChipLabel>Xuxue Feng</ChipLabel>
                <ChipEnd>
                    <ChipRemove>
                        <TimesCircle />
                    </ChipRemove>
                </ChipEnd>
            </Chip>
        </div>
    );
}
```

### Template

Chip also allows displaying custom content inside itself.

```tsx
import { Apple, Facebook, Github, Google, Microsoft, MinusCircle } from '@primeicons/react';
import { Chip, ChipEnd, ChipLabel, ChipRemove, ChipStart } from '@/components/ui/chip';

export default function TemplateDemo() {
    return (
        <div className="flex items-center justify-center flex-wrap gap-2">
            <Chip className="bg-neutral-900 dark:bg-neutral-50 **:text-neutral-50 dark:**:text-neutral-900">
                <ChipStart>
                    <Apple />
                </ChipStart>
                <ChipLabel>Apple</ChipLabel>
            </Chip>
            <Chip className="bg-blue-50 dark:bg-blue-950 **:text-blue-700 dark:**:text-blue-300">
                <ChipStart>
                    <Facebook />
                </ChipStart>
                <ChipLabel>Facebook</ChipLabel>
            </Chip>
            <Chip className="bg-red-50 dark:bg-red-950 **:text-red-700 dark:**:text-red-300">
                <ChipStart>
                    <Google />
                </ChipStart>
                <ChipLabel>Google</ChipLabel>
            </Chip>
            <Chip className="bg-green-50 dark:bg-green-950 **:text-green-700 dark:**:text-green-300">
                <ChipStart>
                    <Microsoft />
                </ChipStart>
                <ChipLabel>Microsoft</ChipLabel>
            </Chip>
            <Chip className="bg-purple-50 dark:bg-purple-950 **:text-purple-700 dark:**:text-purple-300">
                <ChipStart>
                    <Github />
                </ChipStart>
                <ChipLabel>GitHub</ChipLabel>
                <ChipEnd>
                    <ChipRemove>
                        <MinusCircle />
                    </ChipRemove>
                </ChipEnd>
            </Chip>
        </div>
    );
}
```

## API

### Sub-Components

See [Primitive API](../../primitive/chip/features.md#api) for `ChipRoot`, `ChipStart`, `ChipLabel`, `ChipEnd`, and `ChipRemove` component documentation.

### Hooks

See [Headless API](../../headless/chip/features.md#api) for `useChip` hook documentation.

## Accessibility

See [Chip Primitive](../../primitive/chip/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
