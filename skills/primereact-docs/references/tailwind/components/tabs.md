# Tabs

Tabs is a component that displays a list of tabs and allows the user to select one.

## Installation

   Shadcn CLI
    Manual
```bash
npx shadcn@latest add https://primereact.dev/r/tabs.json
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { Tabs, TabsList, TabsTab, TabsPanels, TabsPanel } from '@/components/ui/tabs';
```

```tsx
<Tabs>
    <TabsList>
        <TabsTab />
    </TabsList>
    <TabsPanels>
        <TabsPanel />
    </TabsPanels>
</Tabs>
```

## Examples

### Basic

### Dynamic

Create tabs from an array to keep labels and panel content in sync.

### Controlled

Control the active tab with `value` and `onValueChange`.

### Scrollable

Enable `scrollable` to navigate long tab lists with previous and next buttons.

### Select on Focus

Set `selectOnFocus` to activate tabs on focus.

### Disabled

Set `disabled` on `TabsTab` to prevent selection.

### Template

Use custom markup inside `TabsTab` and `TabsPanel` to build richer tab content.

## Accessibility

### Screen Reader

`TabsTab` elements use the `tab` role and expose selected and disabled state via ARIA attributes. `TabsPanel` uses the `tabpanel` role and links back to its related tab with `aria-labelledby`.

### Tab Keyboard Support

| Key           | Function                                                                                             |
| ------------- | ---------------------------------------------------------------------------------------------------- |
| `tab`         | Moves focus to the active tab and then proceeds to the next focusable element.                       |
| `enter`       | Activates the focused tab header.                                                                    |
| `space`       | Activates the focused tab header.                                                                    |
| `right arrow` | Moves focus to the next header. If focus is on the last header, moves focus to the first header.     |
| `left arrow`  | Moves focus to the previous header. If focus is on the first header, moves focus to the last header. |
| `home`        | Moves focus to the first header.                                                                     |
| `end`         | Moves focus to the last header.                                                                      |
