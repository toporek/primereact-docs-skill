# useTerminal

Hook that manages command execution, input state, and command history for a terminal-style interface.

```tsx
'use client';
import { TerminalResponse, useTerminal } from '@primereact/headless/terminal';

export default function BasicDemo() {
    const commandHandler = (text: string): TerminalResponse => {
        const command = text.trim().split(/\s+/)[0];

        switch (command) {
            case 'help':
                return 'Available commands: date, greet, random, clear';
            case 'date':
                return new Date().toLocaleString();
            case 'greet':
                return `Hello, ${text.substring(text.indexOf(' ') + 1).trim() || 'World'}!`;
            case 'random':
                return `Your random number: ${Math.floor(Math.random() * 100)}`;
            case 'clear':
                return null;
            default:
                return `Unknown command: ${command}. Type "help" for available commands.`;
        }
    };

    const { rootProps, promptValueProps, state } = useTerminal({ prompt: '$', onCommand: commandHandler });

    return (
        <div className="max-w-2xl mx-auto">
            <div {...rootProps} className="bg-surface-900 text-surface-0 rounded-lg p-4 h-72 overflow-y-auto cursor-text font-mono text-sm">
                <div className="text-surface-400 mb-2">Welcome to PrimeReact Terminal. Type &quot;help&quot; for available commands.</div>
                <div className="flex flex-col gap-1">
                    {state.commands.map((cmd, index) => (
                        <div key={index}>
                            <div className="flex gap-2">
                                <span className="text-emerald-400">$</span>
                                <span>{cmd.text}</span>
                            </div>
                            {cmd.response && (
                                <div className="text-surface-300 whitespace-pre-wrap pl-4" aria-live="polite">
                                    {cmd.response}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="flex gap-2 items-center mt-1">
                    <span className="text-emerald-400">$</span>
                    <input {...promptValueProps} className="flex-1 bg-transparent border-none outline-none text-surface-0 p-0 font-mono text-sm" />
                </div>
            </div>
        </div>
    );
}
```

## Usage

```tsx showLineNumbers {1-2,4,7-8,10-11,14}
import { useTerminal } from '@primereact/headless/terminal';
import { TerminalResponse } from '@primereact/headless/terminal';

const { rootProps, promptValueProps, commandResponseProps, state } = useTerminal({ prompt: '$', onCommand: commandHandler });

return (
    <div {...rootProps}>
        {state.commands.map((cmd, index) => (
            <div key={index}>
                <span>{cmd.text}</span>
                {cmd.response && <div {...commandResponseProps}>{cmd.response}</div>}
            </div>
        ))}
        <input {...promptValueProps} />
    </div>
);
```

`useTerminal` manages command input, execution, and history navigation — see [Primitive](../../primitive/terminal/features.md) for a component-based API.

## Features

- Returns spread-ready `rootProps`, `promptValueProps`, and `commandResponseProps` with data attributes and `aria-live`
- Tracks command history in `state.commands` with text and optional response
- Supports synchronous and asynchronous `onCommand` handlers
- Navigates command history with Arrow Up
- Clears all commands when `onCommand` returns `null`

## Behavior

### Command Handler

The `onCommand` callback receives the entered text and returns a `TerminalResponse` — a `ReactNode`, `null` to clear, or `undefined` for no response.

```tsx
const handler = (text: string): TerminalResponse => {
    if (text === 'clear') return null;
    return `You typed: ${text}`;
};

const { state } = useTerminal({ onCommand: handler, elementRef: ref });
```

### Async Commands

`onCommand` can return a `Promise<TerminalResponse>` for asynchronous operations.

```tsx
const handler = async (text: string): Promise<TerminalResponse> => {
    const result = await fetch(`/api/cmd?q=${text}`);
    return result.text();
};
```

### Command History

Press Arrow Up to cycle through previously entered commands. The index wraps around to the last command.

```tsx
const { state } = useTerminal({ prompt: '$', onCommand: handler, elementRef: ref });

// state.commands is an array of { text: string, response?: ReactNode }
state.commands.map((cmd) => cmd.text);
```

### Custom Styling with Data Attributes

The prop objects include `data-scope="terminal"` and `data-part` for styling.

```css
[data-scope='terminal'][data-part='root'] {
    background-color: #1e1e1e;
    color: #fff;
    font-family: monospace;
}

[data-scope='terminal'][data-part='promptvalue'] {
    background: transparent;
    border: none;
    outline: none;
}

[data-scope='terminal'][data-part='commandresponse'] {
    padding-left: 1rem;
}
```

## API

### useTerminal

> **API/props table for `useTerminal` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

See [Terminal Primitive](../../primitive/terminal/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
