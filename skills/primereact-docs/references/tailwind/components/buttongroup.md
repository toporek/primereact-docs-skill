# ButtonGroup

ButtonGroup composes related buttons into a connected pill with shared corners and seams.

```tsx
'use client';
import { Button } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/buttongroup';
import { Menu, MenuItem, MenuList, MenuPopup, MenuPortal, MenuPositioner, MenuTrigger } from '@/components/ui/menu';
import { Check, ChevronDown, ChevronLeft, ChevronRight, Clock, File, Send, Times, Trash } from '@primeicons/react';

export default function Preview() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-4">
            <ButtonGroup>
                <Button>
                    <Check />
                    Save
                </Button>
                <Button>
                    <Times />
                    Cancel
                </Button>
                <Button>
                    <Trash />
                    Delete
                </Button>
            </ButtonGroup>

            <Menu>
                <ButtonGroup>
                    <Button variant="outlined">
                        <Check />
                        Save
                    </Button>
                    <MenuTrigger as={Button} variant="outlined" aria-label="More save options" iconOnly>
                        <ChevronDown />
                    </MenuTrigger>
                </ButtonGroup>
                <MenuPortal>
                    <MenuPositioner sideOffset={4} align="end">
                        <MenuPopup className="w-48">
                            <MenuList>
                                <MenuItem>
                                    <File />
                                    Save as draft
                                </MenuItem>
                                <MenuItem>
                                    <Send />
                                    Save and publish
                                </MenuItem>
                                <MenuItem>
                                    <Clock />
                                    Save and schedule
                                </MenuItem>
                            </MenuList>
                        </MenuPopup>
                    </MenuPositioner>
                </MenuPortal>
            </Menu>

            <ButtonGroup>
                <Button variant="outlined" severity="secondary" aria-label="Previous" iconOnly>
                    <ChevronLeft />
                </Button>
                <Button variant="outlined" severity="secondary" aria-label="Next" iconOnly>
                    <ChevronRight />
                </Button>
            </ButtonGroup>
        </div>
    );
}

```

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add https://primereact.dev/r/buttongroup.json
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { Button } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/buttongroup';
```

```tsx
<ButtonGroup>
    <Button>Save</Button>
    <Button>Cancel</Button>
</ButtonGroup>
```

## Examples

### Basic

A standard ButtonGroup wraps multiple buttons into a connected unit.

```tsx
import { Button } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/buttongroup';
import { Check, Times, Trash } from '@primeicons/react';

export default function BasicDemo() {
    return (
        <div className="flex flex-col items-center gap-4">
            <ButtonGroup>
                <Button>
                    <Check />
                    Save
                </Button>
                <Button>
                    <Times />
                    Cancel
                </Button>
                <Button>
                    <Trash />
                    Delete
                </Button>
            </ButtonGroup>
            <ButtonGroup>
                <Button variant="outlined">
                    <Check />
                    Save
                </Button>
                <Button variant="outlined">
                    <Times />
                    Cancel
                </Button>
                <Button variant="outlined">
                    <Trash />
                    Delete
                </Button>
            </ButtonGroup>
        </div>
    );
}

```

### Icons

Buttons inside a group support leading and trailing icons.

```tsx
import { Button } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/buttongroup';
import { Check, Refresh, Search, User } from '@primeicons/react';

export default function IconDemo() {
    return (
        <div className="flex flex-col items-center gap-4">
            <ButtonGroup>
                <Button>
                    <User />
                    Profile
                </Button>
                <Button>
                    <Search />
                    Search
                </Button>
                <Button>
                    <Refresh />
                    Update
                </Button>
            </ButtonGroup>
            <ButtonGroup>
                <Button>
                    Profile
                    <User />
                </Button>
                <Button>
                    Search
                    <Search />
                </Button>
                <Button>
                    Save
                    <Check />
                </Button>
            </ButtonGroup>
        </div>
    );
}

```

### Severity

Each button in a group can use a different severity to convey intent.

```tsx
import { Button } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/buttongroup';
import { ChevronDown, Check } from '@primeicons/react';

const severities = ['primary', 'secondary', 'success', 'info', 'warn', 'help', 'danger', 'contrast'] as const;

export default function SeverityDemo() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-4 max-w-xl mx-auto">
            {severities.map((severity) => (
                <ButtonGroup key={severity}>
                    <Button {...(severity !== 'primary' && { severity })}>
                        <Check />
                        Save
                    </Button>
                    <Button {...(severity !== 'primary' && { severity })} aria-label="More options" iconOnly>
                        <ChevronDown />
                    </Button>
                </ButtonGroup>
            ))}
        </div>
    );
}

```

### Raised

Raised buttons display a shadow to indicate elevation.

```tsx
import { Button } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/buttongroup';
import { ChevronDown, Check } from '@primeicons/react';

const severities = ['primary', 'secondary', 'success', 'info', 'warn', 'help', 'danger', 'contrast'] as const;

export default function RaisedDemo() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-4 max-w-xl mx-auto">
            {severities.map((severity) => (
                <ButtonGroup key={severity}>
                    <Button {...(severity !== 'primary' && { severity })} raised>
                        <Check />
                        Save
                    </Button>
                    <Button {...(severity !== 'primary' && { severity })} raised aria-label="More options" iconOnly>
                        <ChevronDown />
                    </Button>
                </ButtonGroup>
            ))}
        </div>
    );
}

```

### Rounded

Rounded buttons soften the outer corners of the group.

```tsx
import { Button } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/buttongroup';
import { ChevronDown, Check } from '@primeicons/react';

const severities = ['primary', 'secondary', 'success', 'info', 'warn', 'help', 'danger', 'contrast'] as const;

export default function RoundedDemo() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-4 max-w-xl mx-auto">
            {severities.map((severity) => (
                <ButtonGroup key={severity}>
                    <Button {...(severity !== 'primary' && { severity })} rounded>
                        <Check />
                        Save
                    </Button>
                    <Button {...(severity !== 'primary' && { severity })} rounded aria-label="More options" iconOnly>
                        <ChevronDown />
                    </Button>
                </ButtonGroup>
            ))}
        </div>
    );
}

```

### Text

Text buttons render as textual elements while keeping the connected layout.

```tsx
import { Button } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/buttongroup';
import { ChevronDown, Check } from '@primeicons/react';

const severities = ['primary', 'secondary', 'success', 'info', 'warn', 'help', 'danger', 'contrast'] as const;

export default function TextDemo() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-4 max-w-xl mx-auto">
            {severities.map((severity) => (
                <ButtonGroup key={severity}>
                    <Button {...(severity !== 'primary' && { severity })} variant="text">
                        <Check />
                        Save
                    </Button>
                    <Button {...(severity !== 'primary' && { severity })} variant="text" aria-label="More options" iconOnly>
                        <ChevronDown />
                    </Button>
                </ButtonGroup>
            ))}
        </div>
    );
}

```

### Outlined

Outlined buttons display a border without a transparent background.

```tsx
import { Button } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/buttongroup';
import { ChevronDown, Check } from '@primeicons/react';

const severities = ['primary', 'secondary', 'success', 'info', 'warn', 'help', 'danger', 'contrast'] as const;

export default function OutlinedDemo() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-4 max-w-xl mx-auto">
            {severities.map((severity) => (
                <ButtonGroup key={severity}>
                    <Button {...(severity !== 'primary' && { severity })} variant="outlined">
                        <Check />
                        Save
                    </Button>
                    <Button {...(severity !== 'primary' && { severity })} variant="outlined" aria-label="More options" iconOnly>
                        <ChevronDown />
                    </Button>
                </ButtonGroup>
            ))}
        </div>
    );
}

```

### Icon Only

Icon-only buttons can be combined into compact toolbars and pickers.

```tsx
import { Button } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/buttongroup';
import { ChevronLeft, ChevronRight } from '@primeicons/react';

const variants = [
    { key: 'default', props: {} },
    { key: 'outlined', props: { variant: 'outlined' as const } },
    { key: 'text', props: { variant: 'text' as const } },
    { key: 'raised', props: { raised: true } },
    { key: 'rounded', props: { rounded: true } }
];

export default function IconOnlyDemo() {
    return (
        <div className="flex flex-col items-center gap-4">
            <div className="flex flex-wrap items-center justify-center gap-4">
                {variants.map(({ key, props }) => (
                    <ButtonGroup key={key}>
                        <Button {...props} aria-label="Previous" iconOnly>
                            <ChevronLeft />
                        </Button>
                        <Button {...props} aria-label="Next" iconOnly>
                            <ChevronRight />
                        </Button>
                    </ButtonGroup>
                ))}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
                {variants.map(({ key, props }) => (
                    <ButtonGroup key={key}>
                        <Button {...props} severity="secondary" aria-label="Previous" iconOnly>
                            <ChevronLeft />
                        </Button>
                        <Button {...props} severity="secondary" aria-label="Next" iconOnly>
                            <ChevronRight />
                        </Button>
                    </ButtonGroup>
                ))}
            </div>
        </div>
    );
}

```

### Sizes

ButtonGroup supports `small` and `large` sizes alongside the default.

```tsx
import { Button } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/buttongroup';
import { Check, Times, Trash } from '@primeicons/react';

export default function SizeDemo() {
    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <ButtonGroup>
                <Button size="small">
                    <Check />
                    Save
                </Button>
                <Button size="small">
                    <Trash />
                    Delete
                </Button>
                <Button size="small">
                    <Times />
                    Cancel
                </Button>
            </ButtonGroup>
            <ButtonGroup>
                <Button>
                    <Check />
                    Save
                </Button>
                <Button>
                    <Trash />
                    Delete
                </Button>
                <Button>
                    <Times />
                    Cancel
                </Button>
            </ButtonGroup>
            <ButtonGroup>
                <Button size="large">
                    <Check />
                    Save
                </Button>
                <Button size="large">
                    <Trash />
                    Delete
                </Button>
                <Button size="large">
                    <Times />
                    Cancel
                </Button>
            </ButtonGroup>
        </div>
    );
}

```

### Disabled

When `disabled` is present on each button, the group becomes non-interactive.

```tsx
import { Button } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/buttongroup';
import { Check, Times, Trash } from '@primeicons/react';

export default function DisabledDemo() {
    return (
        <div className="flex justify-center">
            <ButtonGroup>
                <Button disabled>
                    <Check />
                    Save
                </Button>
                <Button disabled>
                    <Trash />
                    Delete
                </Button>
                <Button disabled>
                    <Times />
                    Cancel
                </Button>
            </ButtonGroup>
        </div>
    );
}

```

### Split Button

Pair a primary action with a `MenuTrigger` button to expose related options without crowding the main action.

```tsx
'use client';
import { Button } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/buttongroup';
import {
    Menu,
    MenuSubmenuIndicator,
    MenuItem,
    MenuList,
    MenuPopup,
    MenuPortal,
    MenuPositioner,
    MenuSeparator,
    MenuSubmenu,
    MenuSubmenuTrigger,
    MenuTrigger
} from '@/components/ui/menu';
import { Check, ChevronDown, ChevronRight, Clock, File, Send } from '@primeicons/react';

export default function SplitButtonDemo() {
    return (
        <div className="flex flex-wrap items-start justify-center gap-4">
            <Menu>
                <ButtonGroup>
                    <Button>
                        <Check />
                        Save
                    </Button>
                    <MenuTrigger as={Button} aria-label="More save options" iconOnly>
                        <ChevronDown />
                    </MenuTrigger>
                </ButtonGroup>
                <MenuPortal>
                    <MenuPositioner sideOffset={4} align="end">
                        <MenuPopup className="w-48">
                            <MenuList>
                                <MenuItem>
                                    <File />
                                    Save as draft
                                </MenuItem>
                                <MenuItem>
                                    <Send />
                                    Save and publish
                                </MenuItem>
                                <MenuItem>
                                    <Clock />
                                    Save and schedule
                                </MenuItem>
                            </MenuList>
                        </MenuPopup>
                    </MenuPositioner>
                </MenuPortal>
            </Menu>

            <Menu>
                <ButtonGroup>
                    <Button variant="outlined" severity="secondary">
                        Export
                    </Button>
                    <MenuTrigger as={Button} variant="outlined" severity="secondary" aria-label="More export options" iconOnly>
                        <ChevronDown />
                    </MenuTrigger>
                </ButtonGroup>
                <MenuPortal>
                    <MenuPositioner sideOffset={4} align="end">
                        <MenuPopup className="w-48">
                            <MenuList>
                                <MenuSubmenu>
                                    <MenuSubmenuTrigger>
                                        Download as
                                        <MenuSubmenuIndicator>
                                            <ChevronRight className="size-3.5" />
                                        </MenuSubmenuIndicator>
                                    </MenuSubmenuTrigger>
                                    <MenuPortal>
                                        <MenuPositioner>
                                            <MenuPopup className="w-40">
                                                <MenuList>
                                                    <MenuItem>PDF</MenuItem>
                                                    <MenuItem>Word</MenuItem>
                                                    <MenuItem>Markdown</MenuItem>
                                                    <MenuItem>HTML</MenuItem>
                                                </MenuList>
                                            </MenuPopup>
                                        </MenuPositioner>
                                    </MenuPortal>
                                </MenuSubmenu>

                                <MenuSeparator />

                                <MenuItem>Send via email</MenuItem>
                                <MenuItem>Copy link</MenuItem>
                            </MenuList>
                        </MenuPopup>
                    </MenuPositioner>
                </MenuPortal>
            </Menu>
        </div>
    );
}

```
