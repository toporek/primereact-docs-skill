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
                    className="absolute block -bottom-px left-[var(--active-bar-left)] h-0.5 w-[var(--active-bar-width)] bg-primary transition-all duration-200 ease-out"
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

```tsx showLineNumbers {1,3,6-7,10,13,16}
import { useTabs } from '@primereact/headless/tabs';

const { getTabProps, getIndicatorProps, isItemActive, state, contentRef, contentProps } = useTabs({ defaultValue: 'tab1' });

return (
    <div role="tablist" ref={contentRef} {...contentProps}>
        <button {...getTabProps('tab1')}>Tab 1</button>
        <button {...getTabProps('tab2')}>Tab 2</button>
        <button {...getTabProps('tab3', true)}>Tab 3 (disabled)</button>
        <span {...getIndicatorProps()} />
    </div>
);
```

`useTabs` manages active tab state, keyboard focus cycling, scroll navigation, and active indicator positioning — see [Primitive](../../primitive/tabs/features.md) for a component-based API. Returns spread-ready prop objects via `getTabProps(value, disabled?)` and `getIndicatorProps()`, along with `state`, refs, and scroll helpers.

## Features

- `getTabProps(value)` returns spread-ready props for each tab including ARIA attributes, keyboard handlers, and active state tracking
- `getIndicatorProps()` returns ref and CSS custom properties for animated active bar positioning
- `isItemActive()` to check active state per tab and `updateValue()` to set it programmatically
- Scroll navigation with `scrollPrev`/`scrollNext` methods and `canScrollPrev`/`canScrollNext` state
- Configurable `scrollStrategy`: `'nearest'`, `'center'`, `false`, or a custom function

## Behavior

### Default Value

Set `defaultValue` for uncontrolled tab selection.

```tsx
const tabs = useTabs({ defaultValue: 'tab1' });
```

### Controlled

Pass `value` and `onValueChange` for controlled usage.

```tsx
const [activeTab, setActiveTab] = React.useState('tab1');

const tabs = useTabs({
    value: activeTab,
    onValueChange: (e) => setActiveTab(e.value)
});
```

### Select on Focus

Set `selectOnFocus` to activate tabs when they receive focus instead of requiring Enter/Space.

```tsx
const tabs = useTabs({ defaultValue: 'tab1', selectOnFocus: true });
```

### Scroll Navigation

Use `contentRef`, `prevButtonRef`, and `nextButtonRef` for scrollable tab lists. The hook provides `scrollPrev`/`scrollNext` methods and `state.canScrollPrev`/`state.canScrollNext` for button visibility.

```tsx
const tabs = useTabs({ defaultValue: '0' });

<div ref={tabs.contentRef} {...tabs.contentProps}>
    {/* tabs */}
</div>
<button ref={tabs.prevButtonRef} onClick={tabs.scrollPrev} disabled={!tabs.state.canScrollPrev}>Prev</button>
<button ref={tabs.nextButtonRef} onClick={tabs.scrollNext} disabled={!tabs.state.canScrollNext}>Next</button>
```

### Active Indicator

Spread `getIndicatorProps()` on a bar element. The hook assigns a ref and sets the following CSS custom properties on it.

| Variable              | Description                           |
| --------------------- | ------------------------------------- |
| `--active-bar-width`  | Width of the active tab element       |
| `--active-bar-height` | Height of the active tab element      |
| `--active-bar-left`   | Left offset of the active tab element |
| `--active-bar-top`    | Top offset of the active tab element  |

```tsx
<span {...getIndicatorProps()} style={{ width: 'var(--active-bar-width)', left: 'var(--active-bar-left)' }} />
```

### Custom Styling with Data Attributes

Use `scrollStateAttrs` to spread `data-can-scroll-prev` and `data-can-scroll-next` onto elements for CSS-based scroll button styling.

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

See [Tabs Primitive](../../primitive/tabs/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
