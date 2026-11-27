# Tooltip

An unstyled tooltip component with hover/focus triggers, delay management, and group transitions.

Build fully custom tooltips with complete control over layout and styling.

## Features

- Configurable `openDelay` and `closeDelay` for timing control
- `Manager` enables instant transitions when hovering between adjacent tooltips
- Interactive popup: hovering the tooltip content keeps it open by default, for pointer users only
- Arrow element with automatic per-side positioning via CSS custom properties

## Usage

```tsx
import { Tooltip } from 'primereact/tooltip';
```

```tsx
<Tooltip.Manager>
    <Tooltip.Root>
        <Tooltip.Trigger></Tooltip.Trigger>
        <Tooltip.Portal>
            <Tooltip.Positioner>
                <Tooltip.Popup>
                    <Tooltip.Arrow />
                </Tooltip.Popup>
            </Tooltip.Positioner>
        </Tooltip.Portal>
    </Tooltip.Root>
</Tooltip.Manager>
```

## Behavior

### Polymorphic Rendering

Use `as` on any sub-component to change the rendered HTML element.

```tsx
<Tooltip.Trigger as="div">...</Tooltip.Trigger>
```

### Render Function Children

Sub-components accept a render function as children, providing access to the component instance.

```tsx
<Tooltip.Trigger>{(instance) => <span>{instance.tooltip?.state.open ? 'Active' : 'Idle'}</span>}</Tooltip.Trigger>
```

## Pass Through

## API

### TooltipManager

> **`TooltipManager` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/tooltip or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| manager | TooltipManagerPassThroughType> | Used to pass attributes to the manager's DOM element. |

### TooltipRoot

> **`TooltipRoot` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/tooltip or the installed `@primereact/types`.

| Attribute      | Value                                   |
| -------------- | --------------------------------------- |
| `data-instant` | Instant transition type when applicable |

| Label | Type | Description |
|:------|:------|:------|
| root | TooltipRootPassThroughType> | Used to pass attributes to the root's DOM element. |
| trigger | TooltipRootPassThroughType> | Used to pass attributes to the trigger's DOM element. |
| portal | TooltipRootPassThroughType> | Used to pass attributes to the portal's DOM element. |
| positioner | TooltipRootPassThroughType> | Used to pass attributes to the positioner's DOM element. |
| popup | TooltipRootPassThroughType> | Used to pass attributes to the popup's DOM element. |
| arrow | TooltipRootPassThroughType> | Used to pass attributes to the arrow's DOM element. |

### TooltipTrigger

> **`TooltipTrigger` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/tooltip or the installed `@primereact/types`.

| Attribute         | Value                        |
| ----------------- | ---------------------------- |
| `data-popup-open` | Present when tooltip is open |

| Label | Type | Description |
|:------|:------|:------|
| root | TooltipTriggerPassThroughType> | Used to pass attributes to the root's DOM element. |

### TooltipPortal

> **`TooltipPortal` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/tooltip or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | TooltipPortalPassThroughType> | Used to pass attributes to the root's DOM element. |

### TooltipPositioner

> **`TooltipPositioner` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/tooltip or the installed `@primereact/types`.

| Attribute    | Value                                                     |
| ------------ | --------------------------------------------------------- |
| `data-open`  | Present when tooltip is open                              |
| `data-side`  | `"top"` \| `"bottom"` \| `"left"` \| `"right"`, placement |
| `data-align` | `"start"` \| `"center"` \| `"end"`, alignment             |

**CSS Custom Properties**

The positioner element exposes CSS custom properties for layout and transform control.

| CSS Variable                   | Description                              |
| ------------------------------ | ---------------------------------------- |
| `--px-available-height`        | Available vertical space in pixels       |
| `--px-available-width`         | Available horizontal space in pixels     |
| `--px-transform-origin`        | Computed transform origin for animations |
| `--px-positioner-anchor-width` | Width of the anchor/trigger element      |

| Label | Type | Description |
|:------|:------|:------|
| root | TooltipPositionerPassThroughType> | Used to pass attributes to the root's DOM element. |

### TooltipPopup

> **`TooltipPopup` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/tooltip or the installed `@primereact/types`.

| Attribute           | Value                                     |
| ------------------- | ----------------------------------------- |
| `data-open`         | Present when tooltip is visible           |
| `data-instant`      | Present when an instant transition occurs |
| `data-instant-type` | `'delay'`, `'focus'`, or `'dismiss'`      |

| Label | Type | Description |
|:------|:------|:------|
| root | TooltipPopupPassThroughType> | Used to pass attributes to the root's DOM element. |

### TooltipArrow

> **`TooltipArrow` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/tooltip or the installed `@primereact/types`.

| Attribute      | Value                                                     |
| -------------- | --------------------------------------------------------- |
| `data-open`    | Present when tooltip is visible                           |
| `data-instant` | Instant transition type when applicable                   |
| `data-side`    | `"top"` \| `"bottom"` \| `"left"` \| `"right"`, placement |
| `data-align`   | `"start"` \| `"center"` \| `"end"`, alignment             |

**CSS Custom Properties**

The arrow element exposes CSS custom properties for dynamic positioning:

| CSS Variable             | Description                    |
| ------------------------ | ------------------------------ |
| `--px-placer-arrow-x`    | Horizontal offset of arrow     |
| `--px-placer-arrow-y`    | Vertical offset of arrow       |
| `--px-placer-arrow-left` | Left position of arrow element |
| `--px-placer-arrow-top`  | Top position of arrow element  |

| Label | Type | Description |
|:------|:------|:------|
| root | TooltipArrowPassThroughType> | Used to pass attributes to the root's DOM element. |

## Accessibility

### Screen Reader

Tooltip popup content should be descriptive and associated with a meaningful trigger label. The popup has `role="tooltip"`, and while it is open the trigger's `aria-describedby` points to it.

### Interactive Content

Tooltip content is not reachable with the keyboard. The popup is portaled to the end of the document and closes when the trigger loses focus, so links or buttons inside it are only available to pointer users. Place interactive content in a [Popover](popover.md) instead.

### Keyboard Support

| Key      | Function                                                                                                                              |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `tab`    | Focuses the trigger, opening the tooltip with instant transition.                                                                     |
| `escape` | Closes the open tooltip wherever focus is, without moving focus. Inside a dialog or popover, the first press closes only the tooltip. |
