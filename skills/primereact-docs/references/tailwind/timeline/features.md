# Timeline

Timeline visualizes a series of chained events.

```tsx
import {
    Timeline,
    TimelineConnector,
    TimelineContent,
    TimelineEvent,
    TimelineMarker,
    TimelineOpposite,
    TimelineSeparator
} from '@/components/ui/timeline';

export default function Preview() {
    const events = [{ status: 'Ordered' }, { status: 'Processing' }, { status: 'Shipped' }, { status: 'Delivered' }];

    return (
        <div>
            <Timeline>
                {events.map((event, index) => (
                    <TimelineEvent key={index}>
                        <TimelineOpposite />
                        <TimelineSeparator>
                            <TimelineMarker />
                            {index !== events.length - 1 && <TimelineConnector />}
                        </TimelineSeparator>
                        <TimelineContent>{event.status}</TimelineContent>
                    </TimelineEvent>
                ))}
            </Timeline>
        </div>
    );
}
```

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add @primereact/timeline
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { Timeline, TimelineConnector, TimelineContent, TimelineEvent, TimelineMarker, TimelineOpposite, TimelineSeparator } from '@/components/ui/timeline';
```

```tsx
<Timeline>
    <TimelineEvent>
        <TimelineOpposite />
        <TimelineSeparator>
            <TimelineMarker />
            <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent />
    </TimelineEvent>
</Timeline>
```

## Examples

### Basic

Displays a sequence of events along a vertical or horizontal axis.

```tsx
import {
    Timeline,
    TimelineConnector,
    TimelineContent,
    TimelineEvent,
    TimelineMarker,
    TimelineOpposite,
    TimelineSeparator
} from '@/components/ui/timeline';

export default function BasicDemo() {
    const events = [{ status: 'Ordered' }, { status: 'Processing' }, { status: 'Shipped' }, { status: 'Delivered' }];

    return (
        <div>
            <Timeline>
                {events.map((event, index) => (
                    <TimelineEvent key={index}>
                        <TimelineOpposite />
                        <TimelineSeparator>
                            <TimelineMarker />
                            {index !== events.length - 1 && <TimelineConnector />}
                        </TimelineSeparator>
                        <TimelineContent>{event.status}</TimelineContent>
                    </TimelineEvent>
                ))}
            </Timeline>
        </div>
    );
}
```

### Alignment

Content location relative to the line is defined with the _align_ property.

```tsx
import {
    Timeline,
    TimelineConnector,
    TimelineContent,
    TimelineEvent,
    TimelineMarker,
    TimelineOpposite,
    TimelineSeparator
} from '@/components/ui/timeline';

export default function AlignmentDemo() {
    const events = [{ status: 'Ordered' }, { status: 'Processing' }, { status: 'Shipped' }, { status: 'Delivered' }];

    return (
        <div className="flex flex-wrap gap-12">
            <Timeline className="w-full md:w-80">
                {events.map((event, index) => (
                    <TimelineEvent key={index}>
                        <TimelineOpposite />
                        <TimelineSeparator>
                            <TimelineMarker />
                            {index !== events.length - 1 && <TimelineConnector />}
                        </TimelineSeparator>
                        <TimelineContent>{event.status}</TimelineContent>
                    </TimelineEvent>
                ))}
            </Timeline>
            <Timeline align="right" className="w-full md:w-80">
                {events.map((event, index) => (
                    <TimelineEvent key={index}>
                        <TimelineOpposite />
                        <TimelineSeparator>
                            <TimelineMarker />
                            {index !== events.length - 1 && <TimelineConnector />}
                        </TimelineSeparator>
                        <TimelineContent>{event.status}</TimelineContent>
                    </TimelineEvent>
                ))}
            </Timeline>
            <Timeline align="alternate" className="w-full md:w-80">
                {events.map((event, index) => (
                    <TimelineEvent key={index}>
                        <TimelineOpposite />
                        <TimelineSeparator>
                            <TimelineMarker />
                            {index !== events.length - 1 && <TimelineConnector />}
                        </TimelineSeparator>
                        <TimelineContent>{event.status}</TimelineContent>
                    </TimelineEvent>
                ))}
            </Timeline>
        </div>
    );
}
```

### Opposite

Additional content at the other side of the line can be provided with the _opposite_ property.

```tsx
import {
    Timeline,
    TimelineConnector,
    TimelineContent,
    TimelineEvent,
    TimelineMarker,
    TimelineOpposite,
    TimelineSeparator
} from '@/components/ui/timeline';

export default function OppositeDemo() {
    const events = [
        { status: 'Ordered', date: '15/10/2026 10:30' },
        { status: 'Processing', date: '15/10/2026 14:00' },
        { status: 'Shipped', date: '15/10/2026 16:15' },
        { status: 'Delivered', date: '16/10/2026 10:00' }
    ];

    return (
        <div>
            <Timeline>
                {events.map((event, index) => (
                    <TimelineEvent key={index}>
                        <TimelineOpposite>
                            <small className="text-surface-500 dark:text-surface-400">{event.date}</small>
                        </TimelineOpposite>
                        <TimelineSeparator>
                            <TimelineMarker />
                            {index !== events.length - 1 && <TimelineConnector />}
                        </TimelineSeparator>
                        <TimelineContent>{event.status}</TimelineContent>
                    </TimelineEvent>
                ))}
            </Timeline>
        </div>
    );
}
```

### Horizontal

Timeline orientation is controlled with the _orientation_ property, default is _vertical_ having _horizontal_ as the alternative.

```tsx
import {
    Timeline,
    TimelineConnector,
    TimelineContent,
    TimelineEvent,
    TimelineMarker,
    TimelineOpposite,
    TimelineSeparator
} from '@/components/ui/timeline';

export default function HorizontalDemo() {
    const events = ['2026', '2027', '2028', '2029'];

    return (
        <div className="flex flex-col gap-4">
            <Timeline orientation="horizontal" align="top">
                {events.map((event, index) => (
                    <TimelineEvent key={index}>
                        <TimelineOpposite />
                        <TimelineSeparator>
                            <TimelineMarker />
                            {index !== events.length - 1 && <TimelineConnector />}
                        </TimelineSeparator>
                        <TimelineContent>{event}</TimelineContent>
                    </TimelineEvent>
                ))}
            </Timeline>
            <Timeline orientation="horizontal" align="bottom">
                {events.map((event, index) => (
                    <TimelineEvent key={index}>
                        <TimelineOpposite />
                        <TimelineSeparator>
                            <TimelineMarker />
                            {index !== events.length - 1 && <TimelineConnector />}
                        </TimelineSeparator>
                        <TimelineContent>{event}</TimelineContent>
                    </TimelineEvent>
                ))}
            </Timeline>
            <Timeline orientation="horizontal" align="alternate">
                {events.map((event, index) => (
                    <TimelineEvent key={index}>
                        <TimelineOpposite>&nbsp;</TimelineOpposite>
                        <TimelineSeparator>
                            <TimelineMarker />
                            {index !== events.length - 1 && <TimelineConnector />}
                        </TimelineSeparator>
                        <TimelineContent>{event}</TimelineContent>
                    </TimelineEvent>
                ))}
            </Timeline>
        </div>
    );
}
```

### Custom

Sample implementation with custom content, styled markers, and rich event cards.

```tsx
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Timeline, TimelineConnector, TimelineContent, TimelineEvent, TimelineOpposite, TimelineSeparator } from '@/components/ui/timeline';

export default function CustomDemo() {
    const events = [
        {
            status: 'Order Placed',
            date: 'Oct 15, 2026',
            time: '10:30 AM',
            icon: 'pi pi-shopping-cart',
            color: 'bg-blue-500',
            user: 'JD',
            description: 'Your order #12345 has been confirmed and is being prepared for processing.',
            details: ['2x Wireless Headphones', '1x Phone Case', '1x USB-C Cable']
        },
        {
            status: 'Payment Confirmed',
            date: 'Oct 15, 2026',
            time: '10:32 AM',
            icon: 'pi pi-credit-card',
            color: 'bg-green-500',
            user: 'SY',
            description: 'Payment of $149.99 was successfully processed via Credit Card ending in 4242.'
        },
        {
            status: 'Shipped',
            date: 'Oct 16, 2026',
            time: '02:15 PM',
            icon: 'pi pi-truck',
            color: 'bg-orange-500',
            user: 'MK',
            description: 'Package has been handed to the carrier and is on its way.',
            tracking: 'TRK-892374651'
        },
        {
            status: 'Delivered',
            date: 'Oct 18, 2026',
            time: '11:20 AM',
            icon: 'pi pi-check-circle',
            color: 'bg-lime-500',
            user: 'JD',
            description: 'Package was delivered and signed for at the front door.'
        }
    ];

    return (
        <Timeline align="alternate" className="w-full">
            {events.map((event, index) => (
                <TimelineEvent key={index} className={`mt-4 ${index % 2 === 1 ? 'max-[960px]:flex-row' : ''}`}>
                    <TimelineOpposite>
                        <div className={index % 2 === 0 ? 'text-right' : 'text-left'}>
                            <div className="font-medium text-surface-700 dark:text-surface-200">{event.date}</div>
                            <div className="text-sm text-surface-500 dark:text-surface-400">{event.time}</div>
                        </div>
                    </TimelineOpposite>
                    <TimelineSeparator>
                        <>
                            <span className={`flex items-center justify-center w-12 h-12 rounded-full ${event.color} text-white shadow-lg`}>
                                <i className={`${event.icon} text-lg`} />
                            </span>

                            {index !== events.length - 1 && <TimelineConnector className="bg-surface-300 dark:bg-surface-600" />}
                        </>
                    </TimelineSeparator>
                    <TimelineContent className={index % 2 === 1 ? 'max-[960px]:text-left!' : undefined}>
                        <div className="p-5 rounded-xl bg-surface-0 dark:bg-surface-800 border border-surface-200 dark:border-surface-700 shadow-sm mt-2">
                            <div className="flex items-center gap-3 mb-3">
                                <Avatar shape="circle" size="normal" className="bg-primary/10 text-primary font-semibold">
                                    <AvatarFallback>{event.user}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <div className="font-bold text-surface-900 dark:text-surface-0">{event.status}</div>
                                </div>
                            </div>
                            <p className="text-surface-600 dark:text-surface-300 text-sm leading-relaxed">{event.description}</p>
                            {event.details && (
                                <ul className="mt-3 space-y-1">
                                    {event.details.map((detail, i) => (
                                        <li key={i} className="text-sm text-surface-500 dark:text-surface-400 flex items-center gap-2">
                                            <i className="pi pi-box text-xs" />
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            )}
                            {event.tracking && (
                                <div className="mt-4 p-3 rounded-lg bg-surface-100 dark:bg-surface-700 flex items-center justify-between">
                                    <span className="text-sm text-surface-600 dark:text-surface-300">
                                        <i className="pi pi-map-marker mr-2" />
                                        Tracking: {event.tracking}
                                    </span>
                                    <Button variant="text" size="small">
                                        Track
                                    </Button>
                                </div>
                            )}
                        </div>
                    </TimelineContent>
                </TimelineEvent>
            ))}
        </Timeline>
    );
}
```

### Interactive

Build interactive step-based workflows with progress tracking and state management.

```tsx
'use client';
import { Button } from '@/components/ui/button';
import { Timeline, TimelineConnector, TimelineContent, TimelineEvent, TimelineOpposite, TimelineSeparator } from '@/components/ui/timeline';
import * as React from 'react';
import { Check, CheckCircle, Refresh } from '@primeicons/react';

export default function InteractiveDemo() {
    const allSteps = [
        { id: 1, label: 'Account Created', icon: 'pi pi-user-plus' },
        { id: 2, label: 'Email Verified', icon: 'pi pi-envelope' },
        { id: 3, label: 'Profile Completed', icon: 'pi pi-id-card' },
        { id: 4, label: 'First Purchase', icon: 'pi pi-shopping-bag' },
        { id: 5, label: 'Review Posted', icon: 'pi pi-star' }
    ];

    const [completedSteps, setCompletedSteps] = React.useState<number[]>([1]);
    const [currentStep, setCurrentStep] = React.useState(2);

    const handleComplete = (stepId: number) => {
        if (stepId === currentStep) {
            setCompletedSteps([...completedSteps, stepId]);

            if (currentStep < allSteps.length) {
                setCurrentStep(currentStep + 1);
            }
        }
    };

    const handleReset = () => {
        setCompletedSteps([1]);
        setCurrentStep(2);
    };

    const getStepStatus = (stepId: number) => {
        if (completedSteps.includes(stepId)) return 'completed';

        if (stepId === currentStep) return 'current';

        return 'pending';
    };

    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="text-lg font-semibold text-surface-900 dark:text-surface-0">Onboarding Progress</h3>
                    <p className="text-sm text-surface-500 dark:text-surface-400">
                        {completedSteps.length} of {allSteps.length} steps completed
                    </p>
                </div>
                <Button variant="outlined" size="small" onClick={handleReset} disabled={completedSteps.length === 1}>
                    <Refresh className="mr-2" />
                    Reset
                </Button>
            </div>

            <div className="w-full bg-surface-200 dark:bg-surface-700 rounded-full h-2">
                <div
                    className="bg-primary h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(completedSteps.length / allSteps.length) * 100}%` }}
                />
            </div>

            <Timeline className="mt-4">
                {allSteps.map((step, index) => {
                    const status = getStepStatus(step.id);

                    return (
                        <TimelineEvent key={step.id}>
                            <TimelineOpposite />
                            <TimelineSeparator>
                                <button
                                    onClick={() => handleComplete(step.id)}
                                    disabled={status !== 'current'}
                                    className={`
                                            flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300
                                            ${status === 'completed' ? 'bg-green-500 text-white cursor-default' : ''}
                                            ${status === 'current' ? 'bg-primary text-primary-contrast cursor-pointer hover:scale-110 animate-pulse' : ''}
                                            ${status === 'pending' ? 'bg-surface-200 dark:bg-surface-700 text-surface-400 cursor-not-allowed' : ''}
                                        `}
                                >
                                    {status === 'completed' ? <Check /> : <i className={step.icon} />}
                                </button>

                                {index !== allSteps.length - 1 && (
                                    <TimelineConnector
                                        className={`transition-colors duration-300 ${completedSteps.includes(step.id) ? 'bg-green-500' : 'bg-surface-300 dark:bg-surface-600'}`}
                                    />
                                )}
                            </TimelineSeparator>
                            <TimelineContent>
                                <div
                                    className={`
                                    p-3 rounded-lg transition-all duration-300
                                    ${status === 'completed' ? 'bg-green-50 dark:bg-green-900/20' : ''}
                                    ${status === 'current' ? 'bg-primary/10' : ''}
                                    ${status === 'pending' ? 'opacity-50' : ''}
                                `}
                                >
                                    <div
                                        className={`font-medium ${status === 'completed' ? 'text-green-700 dark:text-green-400 line-through' : status === 'current' ? 'text-primary' : 'text-surface-500'}`}
                                    >
                                        {step.label}
                                    </div>
                                    {status === 'current' && <div className="text-xs text-primary/70 mt-1">Click the marker to complete</div>}
                                </div>
                            </TimelineContent>
                        </TimelineEvent>
                    );
                })}
            </Timeline>

            {completedSteps.length === allSteps.length && (
                <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-center">
                    <CheckCircle className="text-2xl text-green-500 mb-2" />
                    <div className="font-semibold text-green-700 dark:text-green-400">Onboarding Complete!</div>
                    <p className="text-sm text-green-600 dark:text-green-500">You&apos;ve completed all the steps.</p>
                </div>
            )}
        </div>
    );
}
```

### Activity Feed

Display real-time activity streams with user avatars and contextual information.

```tsx
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
    Timeline,
    TimelineConnector,
    TimelineContent,
    TimelineEvent,
    TimelineMarker,
    TimelineOpposite,
    TimelineSeparator
} from '@/components/ui/timeline';
import { Minus } from '@primeicons/react';

export default function ActivityDemo() {
    const activities = [
        {
            id: 1,
            user: { name: 'Sarah Chen', avatar: 'SC', color: 'bg-violet-500' },
            action: 'pushed',
            target: '3 commits',
            repo: 'main',
            time: '2 minutes ago',
            icon: 'pi pi-code',
            details: ['fix: resolve memory leak in useEffect', 'feat: add dark mode toggle', 'chore: update dependencies']
        },
        {
            id: 2,
            user: { name: 'Alex Kumar', avatar: 'AK', color: 'bg-blue-500' },
            action: 'opened',
            target: 'pull request #142',
            repo: 'feature/auth',
            time: '15 minutes ago',
            icon: 'pi pi-directions-alt',
            description: 'Implement OAuth2 authentication flow'
        },
        {
            id: 3,
            user: { name: 'Maya Johnson', avatar: 'MJ', color: 'bg-emerald-500' },
            action: 'commented on',
            target: 'issue #89',
            time: '1 hour ago',
            icon: 'pi pi-comment',
            description: "I've investigated this bug and found the root cause. Working on a fix now."
        },
        {
            id: 4,
            user: { name: 'David Park', avatar: 'DP', color: 'bg-amber-500' },
            action: 'merged',
            target: 'pull request #138',
            repo: 'main',
            time: '3 hours ago',
            icon: 'pi pi-check-circle'
        },
        {
            id: 5,
            user: { name: 'Emma Wilson', avatar: 'EW', color: 'bg-rose-500' },
            action: 'created',
            target: 'release v2.4.0',
            time: '5 hours ago',
            icon: 'pi pi-tag',
            description: 'Performance improvements and bug fixes'
        }
    ];

    return (
        <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
                <i className="pi pi-history text-xl text-surface-500" />
                <h3 className="text-lg font-semibold text-surface-900 dark:text-surface-0">Recent Activity</h3>
            </div>

            <Timeline>
                {activities.map((activity, index) => (
                    <TimelineEvent key={activity.id}>
                        <TimelineOpposite>
                            <span className="text-xs text-surface-400 dark:text-surface-500 whitespace-nowrap">{activity.time}</span>
                        </TimelineOpposite>
                        <TimelineSeparator>
                            <TimelineMarker>
                                <Avatar shape="circle" size="normal" className={`${activity.user.color} text-white text-xs font-semibold`}>
                                    <AvatarFallback>{activity.user.avatar}</AvatarFallback>
                                </Avatar>
                            </TimelineMarker>
                            {index !== activities.length - 1 && <TimelineConnector className="bg-surface-200 dark:bg-surface-700" />}
                        </TimelineSeparator>
                        <TimelineContent>
                            <div className="pb-6">
                                <div className="flex items-center gap-2 flex-wrap">
                                    <span className="font-medium text-surface-900 dark:text-surface-0">{activity.user.name}</span>
                                    <span className="text-surface-500 dark:text-surface-400">{activity.action}</span>
                                    <span className="font-medium text-primary">{activity.target}</span>
                                    {activity.repo && (
                                        <>
                                            <span className="text-surface-500 dark:text-surface-400">to</span>
                                            <code className="px-2 py-0.5 rounded bg-surface-100 dark:bg-surface-800 text-sm font-mono text-surface-700 dark:text-surface-300">
                                                {activity.repo}
                                            </code>
                                        </>
                                    )}
                                </div>

                                {activity.description && (
                                    <p className="mt-2 text-sm text-surface-600 dark:text-surface-400">{activity.description}</p>
                                )}

                                {activity.details && (
                                    <div className="mt-3 p-3 rounded-lg bg-surface-50 dark:bg-surface-800 border border-surface-200 dark:border-surface-700">
                                        <ul className="space-y-1">
                                            {activity.details.map((detail, i) => (
                                                <li
                                                    key={i}
                                                    className="text-sm text-surface-600 dark:text-surface-400 font-mono flex items-start gap-2"
                                                >
                                                    <Minus className="text-xs mt-1.5 text-surface-400" />
                                                    {detail}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </TimelineContent>
                    </TimelineEvent>
                ))}
            </Timeline>
        </div>
    );
}
```
