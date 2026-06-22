# Tabs

Tabs is a component that displays a list of tabs and allows the user to select one.

```tsx
import { Tabs } from '@primereact/ui/tabs';

export default function Preview() {
    return (
        <Tabs.Root defaultValue="tab1">
            <Tabs.List>
                <Tabs.Tab value="tab1">Account Info</Tabs.Tab>
                <Tabs.Tab value="tab2">Payment</Tabs.Tab>
                <Tabs.Tab value="tab3">Preferences</Tabs.Tab>
                <Tabs.Indicator />
            </Tabs.List>
            <Tabs.Panels>
                <Tabs.Panel value="tab1">
                    <h2 className="text-lg font-bold">Account Info</h2>
                    <p className="text-surface-500 mt-1">Update your personal information such as name, email address, and profile picture.</p>
                </Tabs.Panel>
                <Tabs.Panel value="tab2">
                    <h2 className="text-lg font-bold">Payment</h2>
                    <p className="text-surface-500 mt-1">Manage your subscription plan, view invoices, and update your payment method.</p>
                </Tabs.Panel>
                <Tabs.Panel value="tab3">
                    <h2 className="text-lg font-bold">Preferences</h2>
                    <p className="text-surface-500 mt-1">Customize how the application looks and behaves to match your personal preferences.</p>
                </Tabs.Panel>
            </Tabs.Panels>
        </Tabs.Root>
    );
}
```

## Usage

```tsx
import { Tabs } from '@primereact/ui/tabs';
```

```tsx
<Tabs.Root>
    <Tabs.List>
        <Tabs.Prev></Tabs.Prev>
        <Tabs.Content>
            <Tabs.Tab></Tabs.Tab>
            <Tabs.Indicator />
        </Tabs.Content>
        <Tabs.Next></Tabs.Next>
    </Tabs.List>
    <Tabs.Panels>
        <Tabs.Panel></Tabs.Panel>
    </Tabs.Panels>
</Tabs.Root>
```

## Examples

### Basic

Organizes content into selectable, horizontally laid out sections.

```tsx
import { Tabs } from '@primereact/ui/tabs';

export default function BasicDemo() {
    return (
        <Tabs.Root defaultValue="tab1">
            <Tabs.List>
                <Tabs.Tab value="tab1">Account Info</Tabs.Tab>
                <Tabs.Tab value="tab2">Payment</Tabs.Tab>
                <Tabs.Tab value="tab3">Preferences</Tabs.Tab>
                <Tabs.Indicator />
            </Tabs.List>
            <Tabs.Panels>
                <Tabs.Panel value="tab1">
                    <h2 className="text-lg font-bold">Account Info</h2>
                    <p className="text-surface-500 mt-1">Update your personal information such as name, email address, and profile picture.</p>
                </Tabs.Panel>
                <Tabs.Panel value="tab2">
                    <h2 className="text-lg font-bold">Payment</h2>
                    <p className="text-surface-500 mt-1">Manage your subscription plan, view invoices, and update your payment method.</p>
                </Tabs.Panel>
                <Tabs.Panel value="tab3">
                    <h2 className="text-lg font-bold">Preferences</h2>
                    <p className="text-surface-500 mt-1">Customize how the application looks and behaves to match your personal preferences.</p>
                </Tabs.Panel>
            </Tabs.Panels>
        </Tabs.Root>
    );
}
```

### Dynamic

Create tabs from an array to keep labels and panel content in sync.

```tsx
import { Tabs } from '@primereact/ui/tabs';

const tabs = [
    { id: 'tab1', title: 'Account Info', content: 'Update your personal information such as name, email address, and profile picture.' },
    { id: 'tab2', title: 'Payment', content: 'Manage your subscription plan, view invoices, and update your payment method.' },
    { id: 'tab3', title: 'Preferences', content: 'Customize how the application looks and behaves to match your personal preferences.' }
];

export default function DynamicDemo() {
    return (
        <Tabs.Root defaultValue="tab1">
            <Tabs.List>
                {tabs.map((tab) => (
                    <Tabs.Tab key={tab.id} value={tab.id}>
                        {tab.title}
                    </Tabs.Tab>
                ))}
                <Tabs.Indicator />
            </Tabs.List>
            <Tabs.Panels>
                {tabs.map((tab) => (
                    <Tabs.Panel key={tab.id} value={tab.id}>
                        <h2 className="text-lg font-bold">{tab.title}</h2>
                        <p className="text-surface-500 mt-1">{tab.content}</p>
                    </Tabs.Panel>
                ))}
            </Tabs.Panels>
        </Tabs.Root>
    );
}
```

### Controlled

Control the active tab with `value` and `onValueChange`.

```tsx
'use client';
import { Button } from '@primereact/ui/button';
import { Tabs, type TabsRootChangeEvent, type TabsRootProps } from '@primereact/ui/tabs';
import * as React from 'react';

const tabs = [
    { id: 'tab1', title: 'Account Info', content: 'Update your personal information such as name, email address, and profile picture.' },
    { id: 'tab2', title: 'Payment', content: 'Manage your subscription plan, view invoices, and update your payment method.' },
    { id: 'tab3', title: 'Preferences', content: 'Customize how the application looks and behaves to match your personal preferences.' }
];

export default function ControlledDemo() {
    const [activeTab, setActiveTab] = React.useState<TabsRootProps['value']>('tab1');

    return (
        <div className="space-y-4">
            <Button onClick={() => setActiveTab('tab2')}>Go to Payment</Button>
            <Tabs.Root value={activeTab} onValueChange={(e: TabsRootChangeEvent) => setActiveTab(e.value)}>
                <Tabs.List>
                    {tabs.map((tab) => (
                        <Tabs.Tab key={tab.id} value={tab.id}>
                            {tab.title}
                        </Tabs.Tab>
                    ))}
                    <Tabs.Indicator />
                </Tabs.List>
                <Tabs.Panels>
                    {tabs.map((tab) => (
                        <Tabs.Panel key={tab.id} value={tab.id}>
                            <h2 className="text-lg font-bold">{tab.title}</h2>
                            <p className="text-surface-500 mt-1">{tab.content}</p>
                        </Tabs.Panel>
                    ))}
                </Tabs.Panels>
            </Tabs.Root>
        </div>
    );
}
```

### Scrollable

Enable `scrollable` to navigate long tab lists with previous and next buttons.

```tsx
import { ChevronLeft, ChevronRight } from '@primeicons/react';
import { Tabs } from '@primereact/ui/tabs';

export default function ScrollableDemo() {
    return (
        <Tabs.Root defaultValue={'0'}>
            <Tabs.List>
                <Tabs.Prev>
                    <ChevronLeft />
                </Tabs.Prev>
                <Tabs.Content>
                    {scrollableTabs.map((tab) => (
                        <Tabs.Tab key={tab.value} value={tab.value}>
                            {tab.title}
                        </Tabs.Tab>
                    ))}

                    <Tabs.Indicator />
                </Tabs.Content>
                <Tabs.Next>
                    <ChevronRight />
                </Tabs.Next>
            </Tabs.List>
            <Tabs.Panels>
                {scrollableTabs.map((tab) => (
                    <Tabs.Panel key={tab.value} value={tab.value}>
                        <h2 className="text-lg font-bold">{tab.title}</h2>
                        <p className="text-surface-500 mt-1">{tab.content}</p>
                    </Tabs.Panel>
                ))}
            </Tabs.Panels>
        </Tabs.Root>
    );
}

const sentences = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
    'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
    'Curabitur pretium tincidunt lacus, nec viverra velit semper at.',
    'Fusce condimentum nunc ac nisi vulputate fringilla.',
    'Donec fermentum porttitor nunc, vitae pellentesque tortor.',
    'Pellentesque habitant morbi tristique senectus et netus et malesuada fames.',
    'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.'
];

const scrollableTabs = Array.from({ length: 50 }, (_, i) => {
    const start = i % sentences.length;
    const content = Array.from({ length: 4 }, (_, j) => sentences[(start + j) % sentences.length]).join(' ');

    return { title: `Tab ${i + 1}`, value: `${i}`, content };
});
```

### Select on Focus

Set `selectOnFocus` to activate tabs on focus.

```tsx
import { Tabs } from '@primereact/ui/tabs';

const tabs = [
    { id: 'tab1', title: 'Account Info', content: 'Update your personal information such as name, email address, and profile picture.' },
    { id: 'tab2', title: 'Payment', content: 'Manage your subscription plan, view invoices, and update your payment method.' },
    { id: 'tab3', title: 'Preferences', content: 'Customize how the application looks and behaves to match your personal preferences.' }
];

export default function FocusSelectionDemo() {
    return (
        <Tabs.Root defaultValue="tab1" selectOnFocus>
            <Tabs.List>
                {tabs.map((tab) => (
                    <Tabs.Tab key={tab.id} value={tab.id}>
                        {tab.title}
                    </Tabs.Tab>
                ))}
                <Tabs.Indicator />
            </Tabs.List>
            <Tabs.Panels>
                {tabs.map((tab) => (
                    <Tabs.Panel key={tab.id} value={tab.id}>
                        <h2 className="text-lg font-bold">{tab.title}</h2>
                        <p className="text-surface-500 mt-1">{tab.content}</p>
                    </Tabs.Panel>
                ))}
            </Tabs.Panels>
        </Tabs.Root>
    );
}
```

### Disabled

Set `disabled` on `Tabs.Tab` to prevent selection.

```tsx
import { Tabs } from '@primereact/ui/tabs';

export default function DisabledDemo() {
    return (
        <Tabs.Root defaultValue="tab1">
            <Tabs.List>
                <Tabs.Tab value="tab1">Account Info</Tabs.Tab>
                <Tabs.Tab value="tab2" disabled>
                    Payment
                </Tabs.Tab>
                <Tabs.Tab value="tab3">Preferences</Tabs.Tab>
                <Tabs.Indicator />
            </Tabs.List>
            <Tabs.Panels>
                <Tabs.Panel value="tab1">
                    <h2 className="text-lg font-bold">Account Info</h2>
                    <p className="text-surface-500 mt-1">Update your personal information such as name, email address, and profile picture.</p>
                </Tabs.Panel>
                <Tabs.Panel value="tab2">
                    <h2 className="text-lg font-bold">Payment</h2>
                    <p className="text-surface-500 mt-1">Manage your subscription plan, view invoices, and update your payment method.</p>
                </Tabs.Panel>
                <Tabs.Panel value="tab3">
                    <h2 className="text-lg font-bold">Preferences</h2>
                    <p className="text-surface-500 mt-1">Customize how the application looks and behaves to match your personal preferences.</p>
                </Tabs.Panel>
            </Tabs.Panels>
        </Tabs.Root>
    );
}
```

### Custom Indicator

Use `Tabs.Indicator` to customize active tab highlight styles.

```tsx
import { Tabs } from '@primereact/ui/tabs';

const tabs = [
    { id: 'tab1', title: 'Account Info', content: 'Update your personal information such as name, email address, and profile picture.' },
    { id: 'tab2', title: 'Payment', content: 'Manage your subscription plan, view invoices, and update your payment method.' },
    { id: 'tab3', title: 'Preferences', content: 'Customize how the application looks and behaves to match your personal preferences.' }
];

export default function CustomIndicatorDemo() {
    return (
        <Tabs.Root defaultValue="tab1">
            <Tabs.List>
                {tabs.map((tab) => (
                    <Tabs.Tab key={tab.id} value={tab.id} className="border-none z-10">
                        {tab.title}
                    </Tabs.Tab>
                ))}
                <Tabs.Indicator
                    unstyled
                    className="w-[calc(var(--active-bar-width)-10px)] h-[calc(var(--active-bar-height)-16px)] left-[calc(var(--active-bar-left)+5px)] top-[calc(var(--active-bar-top)+8px)] bg-surface-100 dark:bg-surface-800 rounded-md translate-[left,width] duration-200"
                />
            </Tabs.List>
            <Tabs.Panels>
                {tabs.map((tab) => (
                    <Tabs.Panel key={tab.id} value={tab.id}>
                        <h2 className="text-lg font-bold">{tab.title}</h2>
                        <p className="text-surface-500 mt-1">{tab.content}</p>
                    </Tabs.Panel>
                ))}
            </Tabs.Panels>
        </Tabs.Root>
    );
}
```

### Template

Use custom markup inside `Tabs.Tab` and `Tabs.Panel` to build richer tab content.

```tsx
import { Cog } from '@primeicons/react/cog';
import { CreditCard } from '@primeicons/react/credit-card';
import { User } from '@primeicons/react/user';
import { Badge } from '@primereact/ui/badge';
import { Button } from '@primereact/ui/button';
import { InputText } from '@primereact/ui/inputtext';
import { Label } from '@primereact/ui/label';
import { Switch } from '@primereact/ui/switch';
import { Tabs } from '@primereact/ui/tabs';

const tabs = [
    {
        id: 'tab1',
        title: 'Account Info',
        icon: User,
        content: 'Update your personal information such as name, email address, and profile picture.'
    },
    {
        id: 'tab2',
        title: 'Payment',
        icon: CreditCard,
        badge: 'New',
        content: 'Manage your subscription plan, view invoices, and update your payment method.'
    },
    {
        id: 'tab3',
        title: 'Preferences',
        icon: Cog,
        content: 'Customize how the application looks and behaves to match your personal preferences.'
    }
];

export default function TemplateDemo() {
    return (
        <Tabs.Root defaultValue="tab1" className="max-w-md mx-auto">
            <Tabs.List>
                {tabs.map((tab) => {
                    const Icon = tab.icon;

                    return (
                        <Tabs.Tab key={tab.id} value={tab.id} className="flex items-center gap-2">
                            <Icon />
                            {tab.title}
                            {tab.badge && <Badge size="small">{tab.badge}</Badge>}
                        </Tabs.Tab>
                    );
                })}
                <Tabs.Indicator />
            </Tabs.List>
            <Tabs.Panels>
                <Tabs.Panel value="tab1">
                    <div>
                        <p className="mt-2 mb-8 text-surface-500">
                            Update your personal information such as name, email address, and profile picture.
                        </p>
                        <form>
                            <div className="space-y-4">
                                <div className="flex flex-col gap-1">
                                    <Label htmlFor="username">Username</Label>
                                    <InputText id="username" placeholder="john.doe" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <Label htmlFor="email">Email</Label>
                                    <InputText id="email" placeholder="john.doe@example.com" />
                                </div>
                            </div>
                            <Button className="mt-8 w-fit">Save Changes</Button>
                        </form>
                    </div>
                </Tabs.Panel>
                <Tabs.Panel value="tab2">
                    <div>
                        <p className="mt-2 mb-8 text-surface-500">Manage your subscription plan, view invoices, and update your payment method.</p>
                        <form>
                            <div className="space-y-4">
                                <div className="flex flex-col gap-1">
                                    <Label htmlFor="cardName">Cardholder Name</Label>
                                    <InputText id="cardName" placeholder="John Doe" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <Label htmlFor="cardNumber">Card Number</Label>
                                    <InputText id="cardNumber" placeholder="0000 0000 0000 0000" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <Label htmlFor="expiryDate">Expiry Date</Label>
                                    <InputText id="expiryDate" placeholder="MM/YY" />
                                </div>
                            </div>
                            <Button className="mt-8 w-fit">Update Payment</Button>
                        </form>
                    </div>
                </Tabs.Panel>
                <Tabs.Panel value="tab3">
                    <div>
                        <p className="mt-2 mb-8 text-surface-500">
                            Customize how the application looks and behaves to match your personal preferences.
                        </p>
                        <form>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <Label htmlFor="darkMode">Dark Mode</Label>
                                    <Switch.Root inputId="darkMode">
                                        <Switch.Control>
                                            <Switch.Thumb />
                                        </Switch.Control>
                                    </Switch.Root>
                                </div>
                                <div className="flex items-center justify-between">
                                    <Label htmlFor="emailNotifications">Email Notifications</Label>
                                    <Switch.Root inputId="emailNotifications" defaultChecked>
                                        <Switch.Control>
                                            <Switch.Thumb />
                                        </Switch.Control>
                                    </Switch.Root>
                                </div>
                                <div className="flex items-center justify-between">
                                    <Label htmlFor="desktopNotifications">Desktop Notifications</Label>
                                    <Switch.Root inputId="desktopNotifications">
                                        <Switch.Control>
                                            <Switch.Thumb />
                                        </Switch.Control>
                                    </Switch.Root>
                                </div>
                            </div>
                            <Button className="w-fit mt-8 ml-auto mr-0">Save Preferences</Button>
                        </form>
                    </div>
                </Tabs.Panel>
            </Tabs.Panels>
        </Tabs.Root>
    );
}
```

## API

### Sub-Components

See [Primitive API](../../primitive/tabs/features.md#api) for `TabsRoot`, `TabsList`, `TabsTab`, `TabsIndicator`, `TabsPanels`, and `TabsPanel` component documentation.

### Hooks

See [Headless API](../../headless/tabs/features.md#api) for `useTabs` hook documentation.

## Accessibility

See [Tabs Primitive](../../primitive/tabs/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
