# useTabs

Hook that manages tab selection state, keyboard navigation, and scrollable overflow.

```tsx
'use client';
import { useTabs } from '@primereact/headless/tabs';

export default function BasicDemo() {
    const { getTabProps, getIndicatorProps, isItemActive } = useTabs({ defaultValue: 'tab1' });

    return (
        <div>
            <div className="relative flex border-b border-surface-200 dark:border-surface-700">
                {items.map((item) => {
                    const active = isItemActive(item.value);

                    return (
                        <button
                            key={item.value}
                            {...getTabProps(item.value)}
                            className={`px-4 py-3 text-sm font-semibold cursor-pointer transition-colors select-none focus-visible:outline-1 focus-visible:-outline-offset-1 focus-visible:outline-primary ${active ? 'text-primary' : 'text-surface-500 dark:text-surface-400 hover:text-surface-700 dark:hover:text-surface-200'}`}
                        >
                            {item.title}
                        </button>
                    );
                })}
                <span
                    {...getIndicatorProps()}
                    className="absolute block -bottom-px left-[var(--px-active-bar-left)] h-0.5 w-[var(--px-active-bar-width)] bg-primary transition-all duration-200 ease-out"
                />
            </div>
            <div className="p-4 text-surface-700 dark:text-surface-200">
                {items.map((item) => {
                    const active = isItemActive(item.value);

                    return (
                        <div key={item.value} role="tabpanel" style={{ display: active ? 'block' : 'none' }}>
                            <h2 className="text-lg font-bold">{item.title}</h2>
                            <p className="mt-1 text-surface-500 dark:text-surface-400">{item.content}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

const items = [
    { value: 'tab1', title: 'Account Info', content: 'Update your personal information such as name, email address, and profile picture.' },
    { value: 'tab2', title: 'Payment', content: 'Manage your subscription plan, view invoices, and update your payment method.' },
    { value: 'tab3', title: 'Preferences', content: 'Customize how the application looks and behaves to match your personal preferences.' }
];

```

## Usage

```tsx
import { useTabs } from '@primereact/headless/tabs';
```

```tsx
const { getTabProps, getIndicatorProps, isItemActive, state, contentRef, contentProps } = useTabs({ defaultValue: 'tab1' });

<div role="tablist" ref={contentRef} {...contentProps}>
    <button {...getTabProps('tab1')}>Tab 1</button>
    <button {...getTabProps('tab2')}>Tab 2</button>
    <button {...getTabProps('tab3', true)}>Tab 3 (disabled)</button>
    <span {...getIndicatorProps()} />
</div>;
```

`useTabs` manages active tab state, keyboard focus cycling, scroll navigation, and active indicator positioning, see [Primitive](../../primitive/components/tabs.md) for a component-based API.

## Features

- **Per-tab prop getter**, `getTabProps(value, disabled?)` returns ARIA roles, keyboard handlers, and focus bookkeeping for any tab you render
- **Animated active indicator**, `getIndicatorProps()` wires a ref and CSS variables that track the active tab's size and position
- **Scrollable tab lists**, `scrollPrev`/`scrollNext` plus `canScrollPrev`/`canScrollNext` flags power overflow buttons with zero measurement code
- **Configurable scroll strategy**, pick `'nearest'`, `'center'`, disable, or plug in a custom function to scroll the active tab into view
- **Controlled or uncontrolled**, manage the active value externally or let the hook track it internally
- **Imperative selection**, `updateValue()` changes tabs programmatically and `isItemActive()` queries the current selection

## Working with callbacks

### Controlled active tab

Drive the active tab from parent state by pairing `value` with `onValueChange`.

```tsx
const [activeTab, setActiveTab] = React.useState('tab1');

const tabs = useTabs({
    value: activeTab,
    onValueChange: (e) => setActiveTab(e.value)
});
```

### Activate on focus

Set `selectOnFocus` so arrow-key navigation activates tabs instantly rather than waiting for Enter or Space, the pattern used by automatic tablists.

```tsx
const tabs = useTabs({ defaultValue: 'tab1', selectOnFocus: true });
```

### Scrollable overflow with prev/next buttons

Wire `contentRef`, `prevButtonRef`, and `nextButtonRef` into your layout, then use the scroll helpers to drive visibility and clicks.

```tsx
const tabs = useTabs({ defaultValue: '0' });
```

### Animated active indicator

Spread `getIndicatorProps()` on a bar element, the hook sets a ref plus CSS custom properties so you can animate position and size entirely in CSS.

| Variable              | Description                           |
| --------------------- | ------------------------------------- |
| `--active-bar-width`  | Width of the active tab element       |
| `--active-bar-height` | Height of the active tab element      |
| `--active-bar-left`   | Left offset of the active tab element |
| `--active-bar-top`    | Top offset of the active tab element  |

```tsx
<span
    {...getIndicatorProps()}
    style={{
        width: 'var(--px-active-bar-width)',
        left: 'var(--px-active-bar-left)',
        transition: 'all 200ms ease'
    }}
/>
```

## Styling with data attributes

The `scrollStateAttrs` bundle spreads `data-can-scroll-prev` and `data-can-scroll-next` onto any element so scroll button visibility can be controlled in CSS.

```css
[data-can-scroll-prev] .scroll-prev {
    display: flex;
}
[data-can-scroll-next] .scroll-next {
    display: flex;
}
```

## API

### useTabs

> **API/props table for `useTabs` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

Arrow keys move between tabs, Home/End jump to first/last, and Enter activates the focused tab. See [Primitive](../../primitive/components/tabs.md#accessibility) for full WAI-ARIA compliance details.
