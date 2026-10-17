# useNavigationMenu

Hook that coordinates multiple useMenu instances inside a horizontal navigation bar with sibling traversal and single-open-at-a-time behavior.

## Usage

```tsx
import { useMenu } from '@primereact/headless/menu';
import { useNavigationMenu } from '@primereact/headless/navigationmenu';
```

```tsx
const navigationmenu = useNavigationMenu();
const fileMenu = useMenu({ navigationmenu, navigationmenuMenuId: 'file' });
const editMenu = useMenu({ navigationmenu, navigationmenuMenuId: 'edit' });
```

`useNavigationMenu` tracks which child menu is currently open and switches between them on hover or arrow-key traversal. Each `useMenu` registered to the bar surrenders its open-state to the navigation menu via the `navigationmenu` / `navigationmenuMenuId` props.

See [Primitive](../../primitive/components/navigationmenu.md) for a component-based API.

## Features

- **Single-open-at-a-time**, only one child menu may be open; opening another auto-closes the previous
- **Hover-to-switch**, moving the pointer onto a sibling trigger while a menu is open transfers focus and open state
- **Arrow-key traversal**, `focusSibling` lets child menus route arrow keys across triggers
- **Instant transition signal**, `registerInstantSignal` enables animation-less hand-off when switching siblings
- **Horizontal or vertical orientation**, exposed via `aria-orientation` and `data-orientation`

## API

### useNavigationMenu

> **`useNavigationMenu` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/navigationmenu or the installed `@primereact/types`.

### Returned values

| Property            | Description                                                                        |
| ------------------- | ---------------------------------------------------------------------------------- |
| `rootProps`         | Props for the navigation menu container (`role="menubar"`, ARIA + data attributes) |
| `state.openMenuId`  | Id of the currently open child menu, or `null`                                     |
| `state.hasOpenMenu` | Whether any child menu is currently open                                           |
| `isMenuOpen(id)`    | Returns `true` when the menu with the given id is the active one                   |
| `onMenuOpenChange`  | Callback used by child `useMenu` to report open-state changes back to the bar      |
| `focusSibling`      | `(currentMenuId, 'next' \| 'previous')`, moves focus to the adjacent trigger       |
| `setPendingFocus`   | Marks a sibling for focus after the current menu closes                            |
| `registerTrigger`   | Used by child menus to register their trigger DOM ref for keyboard navigation      |

## Accessibility

NavigationMenu exposes `role="menubar"` and reflects orientation via `aria-orientation`. Each child trigger participates in arrow-key navigation.

### Keyboard Support

| Key                          | Function                                                             |
| ---------------------------- | -------------------------------------------------------------------- |
| `left arrow` / `right arrow` | Moves focus to the previous / next trigger (horizontal orientation). |
| `up arrow` / `down arrow`    | Moves focus to the previous / next trigger (vertical orientation).   |
| `enter` / `space`            | Opens the focused menu.                                              |
| `home` / `end`               | Moves focus to the first / last trigger.                             |
| `escape`                     | Closes the open menu and returns focus to its trigger.               |
