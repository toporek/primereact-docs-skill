# Tabs

Tabs is a component that displays a list of tabs and allows the user to select one.

```tsx
import { Tabs, TabsList, TabsPanel, TabsPanels, TabsTab } from '@/components/ui/tabs';

export default function Preview() {
    return (
        <Tabs defaultValue="tab1">
            <TabsList>
                <TabsTab value="tab1">Account Info</TabsTab>
                <TabsTab value="tab2">Payment</TabsTab>
                <TabsTab value="tab3">Preferences</TabsTab>
            </TabsList>
            <TabsPanels>
                <TabsPanel value="tab1">
                    <h2 className="text-lg font-bold">Account Info</h2>
                    <p className="text-surface-500 mt-1">Update your personal information such as name, email address, and profile picture.</p>
                </TabsPanel>
                <TabsPanel value="tab2">
                    <h2 className="text-lg font-bold">Payment</h2>
                    <p className="text-surface-500 mt-1">Manage your subscription plan, view invoices, and update your payment method.</p>
                </TabsPanel>
                <TabsPanel value="tab3">
                    <h2 className="text-lg font-bold">Preferences</h2>
                    <p className="text-surface-500 mt-1">Customize how the application looks and behaves to match your personal preferences.</p>
                </TabsPanel>
            </TabsPanels>
        </Tabs>
    );
}
```

## Installation

   Shadcn CLI
    Manual
```bash
npx shadcn@latest add @primereact/ui/tabs
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

```tsx
import { Tabs, TabsList, TabsPanel, TabsPanels, TabsTab } from '@/components/ui/tabs';

export default function BasicDemo() {
    return (
        <Tabs defaultValue="tab1">
            <TabsList>
                <TabsTab value="tab1">Account Info</TabsTab>
                <TabsTab value="tab2">Payment</TabsTab>
                <TabsTab value="tab3">Preferences</TabsTab>
            </TabsList>
            <TabsPanels>
                <TabsPanel value="tab1">
                    <h2 className="text-lg font-bold">Account Info</h2>
                    <p className="text-surface-500 mt-1">Update your personal information such as name, email address, and profile picture.</p>
                </TabsPanel>
                <TabsPanel value="tab2">
                    <h2 className="text-lg font-bold">Payment</h2>
                    <p className="text-surface-500 mt-1">Manage your subscription plan, view invoices, and update your payment method.</p>
                </TabsPanel>
                <TabsPanel value="tab3">
                    <h2 className="text-lg font-bold">Preferences</h2>
                    <p className="text-surface-500 mt-1">Customize how the application looks and behaves to match your personal preferences.</p>
                </TabsPanel>
            </TabsPanels>
        </Tabs>
    );
}
```

### Dynamic

Create tabs from an array to keep labels and panel content in sync.

```tsx
import { Tabs, TabsList, TabsPanel, TabsPanels, TabsTab } from '@/components/ui/tabs';

const tabs = [
    { id: 'tab1', title: 'Account Info', content: 'Update your personal information such as name, email address, and profile picture.' },
    { id: 'tab2', title: 'Payment', content: 'Manage your subscription plan, view invoices, and update your payment method.' },
    { id: 'tab3', title: 'Preferences', content: 'Customize how the application looks and behaves to match your personal preferences.' }
];

export default function DynamicDemo() {
    return (
        <Tabs defaultValue="tab1">
            <TabsList>
                {tabs.map((tab) => (
                    <TabsTab key={tab.id} value={tab.id}>
                        {tab.title}
                    </TabsTab>
                ))}
            </TabsList>
            <TabsPanels>
                {tabs.map((tab) => (
                    <TabsPanel key={tab.id} value={tab.id}>
                        <h2 className="text-lg font-bold">{tab.title}</h2>
                        <p className="text-surface-500 mt-1">{tab.content}</p>
                    </TabsPanel>
                ))}
            </TabsPanels>
        </Tabs>
    );
}
```

### Controlled

Control the active tab with `value` and `onValueChange`.

```tsx
'use client';
import type { TabsRootChangeEvent, TabsRootProps } from 'primereact/tabs';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsPanel, TabsPanels, TabsTab } from '@/components/ui/tabs';
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
            <Tabs value={activeTab} onValueChange={(e: TabsRootChangeEvent) => setActiveTab(e.value)}>
                <TabsList>
                    {tabs.map((tab) => (
                        <TabsTab key={tab.id} value={tab.id}>
                            {tab.title}
                        </TabsTab>
                    ))}
                </TabsList>
                <TabsPanels>
                    {tabs.map((tab) => (
                        <TabsPanel key={tab.id} value={tab.id}>
                            <h2 className="text-lg font-bold">{tab.title}</h2>
                            <p className="text-surface-500 mt-1">{tab.content}</p>
                        </TabsPanel>
                    ))}
                </TabsPanels>
            </Tabs>
        </div>
    );
}
```

### Scrollable

Enable `scrollable` to navigate long tab lists with previous and next buttons.

```tsx
import { Tabs, TabsList, TabsPanel, TabsPanels, TabsTab } from '@/components/ui/tabs';

export default function ScrollableDemo() {
    return (
        <Tabs defaultValue={'0'}>
            <TabsList>
                {scrollableTabs.map((tab) => (
                    <TabsTab key={tab.value} value={tab.value}>
                        {tab.title}
                    </TabsTab>
                ))}
            </TabsList>
            <TabsPanels>
                {scrollableTabs.map((tab) => (
                    <TabsPanel key={tab.value} value={tab.value}>
                        <h2 className="text-lg font-bold">{tab.title}</h2>
                        <p className="text-surface-500 mt-1">{tab.content}</p>
                    </TabsPanel>
                ))}
            </TabsPanels>
        </Tabs>
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
import { Tabs, TabsList, TabsPanel, TabsPanels, TabsTab } from '@/components/ui/tabs';

const tabs = [
    { id: 'tab1', title: 'Account Info', content: 'Update your personal information such as name, email address, and profile picture.' },
    { id: 'tab2', title: 'Payment', content: 'Manage your subscription plan, view invoices, and update your payment method.' },
    { id: 'tab3', title: 'Preferences', content: 'Customize how the application looks and behaves to match your personal preferences.' }
];

export default function FocusSelectionDemo() {
    return (
        <Tabs defaultValue="tab1" selectOnFocus>
            <TabsList>
                {tabs.map((tab) => (
                    <TabsTab key={tab.id} value={tab.id}>
                        {tab.title}
                    </TabsTab>
                ))}
            </TabsList>
            <TabsPanels>
                {tabs.map((tab) => (
                    <TabsPanel key={tab.id} value={tab.id}>
                        <h2 className="text-lg font-bold">{tab.title}</h2>
                        <p className="text-surface-500 mt-1">{tab.content}</p>
                    </TabsPanel>
                ))}
            </TabsPanels>
        </Tabs>
    );
}
```

### Disabled

Set `disabled` on `TabsTab` to prevent selection.

```tsx
import { Tabs, TabsList, TabsPanel, TabsPanels, TabsTab } from '@/components/ui/tabs';

export default function DisabledDemo() {
    return (
        <Tabs defaultValue="tab1">
            <TabsList>
                <TabsTab value="tab1">Account Info</TabsTab>
                <TabsTab value="tab2" disabled>
                    Payment
                </TabsTab>
                <TabsTab value="tab3">Preferences</TabsTab>
            </TabsList>
            <TabsPanels>
                <TabsPanel value="tab1">
                    <h2 className="text-lg font-bold">Account Info</h2>
                    <p className="text-surface-500 mt-1">Update your personal information such as name, email address, and profile picture.</p>
                </TabsPanel>
                <TabsPanel value="tab2">
                    <h2 className="text-lg font-bold">Payment</h2>
                    <p className="text-surface-500 mt-1">Manage your subscription plan, view invoices, and update your payment method.</p>
                </TabsPanel>
                <TabsPanel value="tab3">
                    <h2 className="text-lg font-bold">Preferences</h2>
                    <p className="text-surface-500 mt-1">Customize how the application looks and behaves to match your personal preferences.</p>
                </TabsPanel>
            </TabsPanels>
        </Tabs>
    );
}
```

### Template

Use custom markup inside `TabsTab` and `TabsPanel` to build richer tab content.

```tsx
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { InputText } from '@/components/ui/inputtext';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsList, TabsPanel, TabsPanels, TabsTab } from '@/components/ui/tabs';
import { Cog, CreditCard, User } from '@primeicons/react';

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
        <Tabs defaultValue="tab1" className="max-w-md mx-auto">
            <TabsList>
                {tabs.map((tab) => (
                    <TabsTab key={tab.id} value={tab.id} className="flex items-center gap-2">
                        <tab.icon />
                        {tab.title}
                        {tab.badge && <Badge size="small">{tab.badge}</Badge>}
                    </TabsTab>
                ))}
            </TabsList>
            <TabsPanels>
                <TabsPanel value="tab1">
                    <p className="mt-2 mb-8 text-surface-500">Update your personal information such as name, email address, and profile picture.</p>
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
                </TabsPanel>
                <TabsPanel value="tab2">
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
                </TabsPanel>
                <TabsPanel value="tab3">
                    <p className="mt-2 mb-8 text-surface-500">Customize how the application looks and behaves to match your personal preferences.</p>
                    <form>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <Label htmlFor="darkMode">Dark Mode</Label>
                                <Switch inputId="darkMode" />
                            </div>
                            <div className="flex items-center justify-between">
                                <Label htmlFor="emailNotifications">Email Notifications</Label>
                                <Switch inputId="emailNotifications" defaultChecked />
                            </div>
                            <div className="flex items-center justify-between">
                                <Label htmlFor="desktopNotifications">Desktop Notifications</Label>
                                <Switch inputId="desktopNotifications" />
                            </div>
                        </div>
                        <Button className="w-fit mt-8 ml-auto mr-0">Save Preferences</Button>
                    </form>
                </TabsPanel>
            </TabsPanels>
        </Tabs>
    );
}
```

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
