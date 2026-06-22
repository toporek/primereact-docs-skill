# Chip

Chip represents entities using icons, labels and images.

```tsx
'use client';
import { Check } from '@primeicons/react';
import { Chip } from '@primereact/ui/chip';
import * as React from 'react';

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
                                        <Check className="size-2.5!" />{' '}
                                    </span>
                                ) : (
                                    chip.emoji
                                )}
                            </Chip.Start>
                            <Chip.Label>{chip.label}</Chip.Label>
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

## Usage

```tsx
import { Chip } from '@primereact/ui/chip';
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

## Examples

### Basic

Displays compact information with an optional remove action.

```tsx
'use client';
import { Check } from '@primeicons/react';
import { Chip } from '@primereact/ui/chip';
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
                        <Chip.Root
                            key={chip.label}
                            onClick={() => onSelect(chips.indexOf(chip))}
                            variant={isSelected ? undefined : 'outlined'}
                            className="cursor-pointer"
                        >
                            <Chip.Start>
                                {isSelected ? (
                                    <span className="size-4.5 inline-flex items-center justify-center bg-surface-900 dark:bg-surface-50 text-surface-0 dark:text-surface-900 rounded-full">
                                        <Check className="size-2.5!" />{' '}
                                    </span>
                                ) : (
                                    chip.emoji
                                )}
                            </Chip.Start>
                            <Chip.Label>{chip.label}</Chip.Label>
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
import { Chip } from '@primereact/ui/chip';

export default function VariantDemo() {
    return (
        <div className="flex items-center justify-center flex-wrap gap-2">
            <Chip.Root>
                <Chip.Start>
                    <Github />
                </Chip.Start>
                <Chip.Label>GitHub</Chip.Label>
                <Chip.End>
                    <Chip.Remove>
                        <MinusCircle />
                    </Chip.Remove>
                </Chip.End>
            </Chip.Root>
            <Chip.Root variant="outlined">
                <Chip.Start>
                    <Github />
                </Chip.Start>
                <Chip.Label>GitHub</Chip.Label>
                <Chip.End>
                    <Chip.Remove>
                        <MinusCircle />
                    </Chip.Remove>
                </Chip.End>
            </Chip.Root>
            <Chip.Root variant="text">
                <Chip.Start>
                    <Github />
                </Chip.Start>
                <Chip.Label>GitHub</Chip.Label>
                <Chip.End>
                    <Chip.Remove>
                        <MinusCircle />
                    </Chip.Remove>
                </Chip.End>
            </Chip.Root>
        </div>
    );
}
```

### Start & End Elements

```tsx
import { Apple, Facebook, Github, Google, Microsoft, MinusCircle } from '@primeicons/react';
import { Chip } from '@primereact/ui/chip';

export default function StartEndDemo() {
    return (
        <div className="flex items-center justify-center flex-wrap gap-2">
            <Chip.Root>
                <Chip.Start>
                    <Apple />
                </Chip.Start>
                <Chip.Label>Apple</Chip.Label>
            </Chip.Root>
            <Chip.Root>
                <Chip.Start>
                    <Facebook />
                </Chip.Start>
                <Chip.Label>Facebook</Chip.Label>
            </Chip.Root>
            <Chip.Root>
                <Chip.Start>
                    <Google />
                </Chip.Start>
                <Chip.Label>Google</Chip.Label>
            </Chip.Root>
            <Chip.Root>
                <Chip.Start>
                    <Microsoft />
                </Chip.Start>
                <Chip.Label>Microsoft</Chip.Label>
            </Chip.Root>
            <Chip.Root>
                <Chip.Start>
                    <Github />
                </Chip.Start>
                <Chip.Label>GitHub</Chip.Label>
                <Chip.End>
                    <Chip.Remove>
                        <MinusCircle />
                    </Chip.Remove>
                </Chip.End>
            </Chip.Root>
        </div>
    );
}
```

### With Avatar

```tsx
import { TimesCircle } from '@primeicons/react';
import { Avatar } from '@primereact/ui/avatar';
import { Chip } from '@primereact/ui/chip';

export default function WithAvatarDemo() {
    return (
        <div className="flex items-center justify-center flex-wrap gap-2">
            <Chip.Root>
                <Chip.Start>
                    <Avatar.Root className="size-full" shape="circle">
                        <Avatar.Image src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" />
                        <Avatar.Fallback className="text-xs">AE</Avatar.Fallback>
                    </Avatar.Root>
                </Chip.Start>
                <Chip.Label>Amy Elsner</Chip.Label>
            </Chip.Root>
            <Chip.Root>
                <Chip.Start>
                    <Avatar.Root className="size-full" shape="circle">
                        <Avatar.Image src="https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png" />
                        <Avatar.Fallback className="text-xs">AJ</Avatar.Fallback>
                    </Avatar.Root>
                </Chip.Start>
                <Chip.Label>Asiya Javayant</Chip.Label>
            </Chip.Root>
            <Chip.Root>
                <Chip.Label>Onyama Limba</Chip.Label>
                <Chip.End>
                    <Avatar.Root className="size-full" shape="circle">
                        <Avatar.Image src="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" />
                        <Avatar.Fallback className="text-xs">OL</Avatar.Fallback>
                    </Avatar.Root>
                </Chip.End>
            </Chip.Root>
            <Chip.Root>
                <Chip.Start>
                    <Avatar.Root className="size-full" shape="circle">
                        <Avatar.Image src="https://primefaces.org/cdn/primevue/images/avatar/xuxuefeng.png" />
                        <Avatar.Fallback className="text-xs">XF</Avatar.Fallback>
                    </Avatar.Root>
                </Chip.Start>
                <Chip.Label>Xuxue Feng</Chip.Label>
                <Chip.End>
                    <Chip.Remove>
                        <TimesCircle />
                    </Chip.Remove>
                </Chip.End>
            </Chip.Root>
        </div>
    );
}
```

### Template

Chip also allows displaying custom content inside itself.

```tsx
import { Apple, Facebook, Github, Google, Microsoft, MinusCircle } from '@primeicons/react';
import { Chip } from '@primereact/ui/chip';

export default function TemplateDemo() {
    return (
        <div className="flex items-center justify-center flex-wrap gap-2">
            <Chip.Root className="bg-neutral-900 dark:bg-neutral-50 **:text-neutral-50 dark:**:text-neutral-900">
                <Chip.Start>
                    <Apple />
                </Chip.Start>
                <Chip.Label>Apple</Chip.Label>
            </Chip.Root>
            <Chip.Root className="bg-blue-50 dark:bg-blue-950 **:text-blue-700 dark:**:text-blue-300">
                <Chip.Start>
                    <Facebook />
                </Chip.Start>
                <Chip.Label>Facebook</Chip.Label>
            </Chip.Root>
            <Chip.Root className="bg-red-50 dark:bg-red-950 **:text-red-700 dark:**:text-red-300">
                <Chip.Start>
                    <Google />
                </Chip.Start>
                <Chip.Label>Google</Chip.Label>
            </Chip.Root>
            <Chip.Root className="bg-green-50 dark:bg-green-950 **:text-green-700 dark:**:text-green-300">
                <Chip.Start>
                    <Microsoft />
                </Chip.Start>
                <Chip.Label>Microsoft</Chip.Label>
            </Chip.Root>
            <Chip.Root className="bg-purple-50 dark:bg-purple-950 **:text-purple-700 dark:**:text-purple-300">
                <Chip.Start>
                    <Github />
                </Chip.Start>
                <Chip.Label>GitHub</Chip.Label>
                <Chip.End>
                    <Chip.Remove>
                        <MinusCircle />
                    </Chip.Remove>
                </Chip.End>
            </Chip.Root>
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
