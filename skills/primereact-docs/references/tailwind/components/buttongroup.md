# ButtonGroup

ButtonGroup composes related buttons into a connected pill with shared corners and seams.

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

### Icons

Buttons inside a group support leading and trailing icons.

### Severity

Each button in a group can use a different severity to convey intent.

### Raised

Raised buttons display a shadow to indicate elevation.

### Rounded

Rounded buttons soften the outer corners of the group.

### Text

Text buttons render as textual elements while keeping the connected layout.

### Outlined

Outlined buttons display a border without a transparent background.

### Icon Only

Icon-only buttons can be combined into compact toolbars and pickers.

### Sizes

ButtonGroup supports `small` and `large` sizes alongside the default.

### Disabled

When `disabled` is present on each button, the group becomes non-interactive.

### Split Button

Pair a primary action with a `MenuTrigger` button to expose related options without crowding the main action.
