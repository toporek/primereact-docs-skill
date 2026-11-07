# Popover

An unstyled popover component with positioning, focus management, and outside click dismissal.

Build fully custom popover overlays with complete control over layout and styling.

## Features

- Compound component API with sub-components: `Root`, `Trigger`, `Portal`, `Positioner`, `Popup`, `Arrow`, `Header`, `Title`, `Close`, `Content`, `Description`, `Footer`
- Automatic positioning relative to trigger with configurable `side`, `align`, and offset options
- Outside click and escape key dismissal with optional focus trapping
- Arrow element support for visual connection to the trigger

## Usage

```tsx
import { Popover } from 'primereact/popover';
```

```tsx
<Popover.Root>
    <Popover.Trigger></Popover.Trigger>
    <Popover.Portal>
        <Popover.Positioner side="bottom" sideOffset={8}>
            <Popover.Popup>
                <Popover.Arrow />
                <Popover.Header>
                    <Popover.Title></Popover.Title>
                    <Popover.Close></Popover.Close>
                </Popover.Header>
                <Popover.Content>
                    <Popover.Description></Popover.Description>
                </Popover.Content>
                <Popover.Footer></Popover.Footer>
            </Popover.Popup>
        </Popover.Positioner>
    </Popover.Portal>
</Popover.Root>
```

## Behavior

### Motion Animation

```tsx
<Popover.Popup motionProps={{ name: 'p-popover' }}>...</Popover.Popup>
```

See [Motion](motion.md) for animation phases, CSS variables, and hide strategies.

### Polymorphic Rendering

Use `as` on any sub-component to change the rendered HTML element.

```tsx
<Popover.Trigger as="div">...</Popover.Trigger>
```

### Render Function Children

Sub-components accept a render function as children, providing access to the component instance.

```tsx
<Popover.Trigger>{(instance) => <span>{instance.popover?.state.open ? 'Close' : 'Open'}</span>}</Popover.Trigger>
```

## Pass Through

## API

### PopoverRoot

> **`PopoverRoot` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/popover or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | PopoverRootPassThroughType> | Used to pass attributes to the root's DOM element. |
| trigger | PopoverRootPassThroughType> | Used to pass attributes to the trigger's DOM element. |
| positioner | PopoverRootPassThroughType> | Used to pass attributes to the positioner's DOM element. |
| popup | PopoverRootPassThroughType> | Used to pass attributes to the popup's DOM element. |
| arrow | PopoverRootPassThroughType> | Used to pass attributes to the arrow's DOM element. |
| header | PopoverRootPassThroughType> | Used to pass attributes to the header's DOM element. |
| title | PopoverRootPassThroughType> | Used to pass attributes to the title's DOM element. |
| description | PopoverRootPassThroughType> | Used to pass attributes to the description's DOM element. |
| content | PopoverRootPassThroughType> | Used to pass attributes to the content's DOM element. |
| footer | PopoverRootPassThroughType> | Used to pass attributes to the footer's DOM element. |
| close | PopoverRootPassThroughType> | Used to pass attributes to the close's DOM element. |

### PopoverTrigger

> **`PopoverTrigger` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/popover or the installed `@primereact/types`.

| Attribute              | Value                        |
| ---------------------- | ---------------------------- |
| `data-positioner-open` | Present when popover is open |

| Label | Type | Description |
|:------|:------|:------|
| root | PopoverTriggerPassThroughType> | Used to pass attributes to the root's DOM element. |

### PopoverPortal

> **`PopoverPortal` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/popover or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | PopoverPortalPassThroughType> | Used to pass attributes to the root's DOM element. |

### PopoverPositioner

> **`PopoverPositioner` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/popover or the installed `@primereact/types`.

| Attribute    | Value                                                     |
| ------------ | --------------------------------------------------------- |
| `data-side`  | `"top"` \| `"bottom"` \| `"left"` \| `"right"`, placement |
| `data-align` | `"start"` \| `"center"` \| `"end"`, alignment             |

**CSS Custom Properties**

The positioner element exposes CSS custom properties for layout and transform control.

| CSS Variable                | Description                              |
| --------------------------- | ---------------------------------------- |
| `--available-height`        | Available vertical space in pixels       |
| `--available-width`         | Available horizontal space in pixels     |
| `--transform-origin`        | Computed transform origin for animations |
| `--positioner-anchor-width` | Width of the anchor/trigger element      |

| Label | Type | Description |
|:------|:------|:------|
| root | PopoverPositionerPassThroughType> | Used to pass attributes to the root's DOM element. |

### PopoverPopup

> **`PopoverPopup` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/popover or the installed `@primereact/types`.

| Attribute   | Value                        |
| ----------- | ---------------------------- |
| `data-open` | Present when popover is open |

| Label | Type | Description |
|:------|:------|:------|
| root | PopoverPopupPassThroughType> | Used to pass attributes to the root's DOM element. |

### PopoverArrow

> **`PopoverArrow` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/popover or the installed `@primereact/types`.

| Attribute    | Value                                                     |
| ------------ | --------------------------------------------------------- |
| `data-side`  | `"top"` \| `"bottom"` \| `"left"` \| `"right"`, placement |
| `data-align` | `"start"` \| `"center"` \| `"end"`, alignment             |

**CSS Custom Properties**

The arrow element exposes CSS custom properties for dynamic positioning:

| CSS Variable          | Description                    |
| --------------------- | ------------------------------ |
| `--placer-arrow-x`    | Horizontal offset of arrow     |
| `--placer-arrow-y`    | Vertical offset of arrow       |
| `--placer-arrow-left` | Left position of arrow element |
| `--placer-arrow-top`  | Top position of arrow element  |

| Label | Type | Description |
|:------|:------|:------|
| root | PopoverArrowPassThroughType> | Used to pass attributes to the root's DOM element. |

### PopoverHeader

> **`PopoverHeader` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/popover or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | PopoverHeaderPassThroughType> | Used to pass attributes to the root's DOM element. |

### PopoverTitle

> **`PopoverTitle` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/popover or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | PopoverTitlePassThroughType> | Used to pass attributes to the root's DOM element. |

### PopoverClose

> **`PopoverClose` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/popover or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | PopoverClosePassThroughType> | Used to pass attributes to the root's DOM element. |

### PopoverContent

> **`PopoverContent` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/popover or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | PopoverContentPassThroughType> | Used to pass attributes to the root's DOM element. |

### PopoverDescription

> **`PopoverDescription` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/popover or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | PopoverDescriptionPassThroughType> | Used to pass attributes to the root's DOM element. |

### PopoverFooter

> **`PopoverFooter` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/popover or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | PopoverFooterPassThroughType> | Used to pass attributes to the root's DOM element. |

## Accessibility

### Screen Reader

Use a clear label for the trigger content so screen readers can identify the action.

Use `Popover.Title` and optional `Popover.Description` to provide semantic structure inside the popup.

The trigger communicates popup state using ARIA attributes such as `aria-expanded`, `aria-controls`, and `aria-haspopup`.

### Keyboard Support

| Key           | Function                                            |
| ------------- | --------------------------------------------------- |
| `enter`       | Activates the trigger button.                       |
| `space`       | Activates the trigger button.                       |
| `escape`      | Closes the popover when `closeOnEscape` is enabled. |
| `tab`         | Moves focus to the next focusable element.          |
| `shift + tab` | Moves focus to the previous focusable element.      |
