# Terminal

Terminal is a text-based interface component that emulates a command line experience, enabling users to enter commands and receive responses.

```tsx
'use client';
import { type TerminalResponse } from '@primereact/ui/terminal';
import { Terminal } from '@primereact/ui/terminal';

export default function Preview() {
    const commandHandler = (text: string): TerminalResponse => {
        const argsIndex: number = text.indexOf(' ');
        const command: string = argsIndex !== -1 ? text.substring(0, argsIndex) : text;

        switch (command) {
            case 'help':
                return 'Available commands:\n  date    - Display current date and time\n  greet   - Get a personalized greeting\n  random  - Generate a random number\n  clear   - Clear the terminal';

            case 'date':
                return new Date().toLocaleString();

            case 'greet': {
                const name = text.substring(argsIndex + 1).trim() || 'World';

                return `Hello, ${name}!`;
            }

            case 'random':
                return `Your random number: ${Math.floor(Math.random() * 100)}`;

            case 'clear':
                return null;

            default:
                return `Command not found: ${command}. Type "help" for available commands.`;
        }
    };

    return (
        <Terminal.Root prompt="$" onCommand={commandHandler}>
            <Terminal.Welcome>Welcome to PrimeReact Terminal. Type &quot;help&quot; for available commands.</Terminal.Welcome>
            <Terminal.CommandList />
            <Terminal.Prompt />
        </Terminal.Root>
    );
}

```

## Usage

```tsx
import { Terminal } from '@primereact/ui/terminal';
```

```tsx
<Terminal.Root>
    <Terminal.Welcome />
    <Terminal.CommandList />
</Terminal.Root>
```

## Examples

### Basic

An interactive terminal that accepts and responds to text commands.

```tsx
'use client';
import { type TerminalResponse } from '@primereact/ui/terminal';
import { Terminal } from '@primereact/ui/terminal';

export default function BasicDemo() {
    const commandHandler = (text: string): TerminalResponse => {
        const argsIndex: number = text.indexOf(' ');
        const command: string = argsIndex !== -1 ? text.substring(0, argsIndex) : text;

        switch (command) {
            case 'help':
                return 'Available commands:\n  date    - Display current date and time\n  greet   - Get a personalized greeting\n  random  - Generate a random number\n  clear   - Clear the terminal';

            case 'date':
                return new Date().toLocaleString();

            case 'greet': {
                const name = text.substring(argsIndex + 1).trim() || 'World';

                return `Hello, ${name}!`;
            }

            case 'random':
                return `Your random number: ${Math.floor(Math.random() * 100)}`;

            case 'clear':
                return null;

            default:
                return `Command not found: ${command}. Type "help" for available commands.`;
        }
    };

    return (
        <Terminal.Root prompt="$" onCommand={commandHandler}>
            <Terminal.Welcome>Welcome to PrimeReact Terminal. Type &quot;help&quot; for available commands.</Terminal.Welcome>
            <Terminal.CommandList />
            <Terminal.Prompt />
        </Terminal.Root>
    );
}

```

### Template

Use the render function to create a custom command display with full control over the output styling.

```tsx
'use client';
import { AngleRight } from '@primeicons/react/angle-right';
import { type TerminalResponse } from '@primereact/ui/terminal';
import { Terminal } from '@primereact/ui/terminal';
import { TerminalCommandInstance, TerminalRootInstance } from '@primereact/ui/terminal';

export default function TemplateDemo() {
    const commandHandler = (text: string): TerminalResponse => {
        const parts = text.trim().split(/\s+/);
        const command = parts[0];
        const args = parts.slice(1).join(' ');

        switch (command) {
            case 'install':
                return (
                    <div className="flex flex-col gap-1">
                        <span className="text-green-500">✔ Resolving dependencies...</span>
                        <span className="text-green-500">✔ Fetching packages...</span>
                        <span className="text-green-500">✔ Linking dependencies...</span>
                        <span className="text-blue-500">ℹ Added {args || 'primereact'} to dependencies</span>
                        <span className="text-muted-color">Done in 2.4s</span>
                    </div>
                );

            case 'build':
                return (
                    <div className="flex flex-col gap-1">
                        <span className="text-green-500">✔ Compiled successfully</span>
                        <span className="text-green-500">✔ Linting passed</span>
                        <span className="text-green-500">✔ Type checking passed</span>
                        <span className="text-blue-500">ℹ Output: dist/</span>
                        <span className="text-muted-color">Build completed in 8.2s</span>
                    </div>
                );

            case 'test':
                return (
                    <div className="flex flex-col gap-1">
                        <span className="text-green-500">✔ 42 tests passed</span>
                        <span className="text-yellow-500">⚠ 2 tests skipped</span>
                        <span className="text-muted-color">Test Suites: 5 passed, 5 total</span>
                    </div>
                );

            case 'status':
                return (
                    <div className="flex flex-col gap-1">
                        <span className="text-blue-500">On branch main</span>
                        <span className="text-green-500">✔ Your branch is up to date</span>
                        <span className="text-muted-color">nothing to commit, working tree clean</span>
                    </div>
                );

            case 'help':
                return (
                    <div className="flex flex-col gap-1">
                        <span className="text-blue-500 font-semibold">Available commands:</span>
                        <span className="text-green-500"> install [pkg]</span>
                        <span className="text-muted-color ps-4">Install a package</span>
                        <span className="text-green-500"> build</span>
                        <span className="text-muted-color ps-4">Build the project</span>
                        <span className="text-green-500"> test</span>
                        <span className="text-muted-color ps-4">Run tests</span>
                        <span className="text-green-500"> status</span>
                        <span className="text-muted-color ps-4">Show git status</span>
                        <span className="text-green-500"> clear</span>
                        <span className="text-muted-color ps-4">Clear terminal</span>
                    </div>
                );

            case 'clear':
                return null;

            default:
                return <span className="text-red-500">✖ Command not found: {command}. Type &quot;help&quot; for available commands.</span>;
        }
    };

    return (
        <Terminal.Root onCommand={commandHandler} className="h-100 rounded-xl pt-0">
            {(instance: TerminalRootInstance) => {
                const { state } = instance;

                return (
                    <>
                        <Terminal.Welcome className="sticky top-0 z-10 flex flex-col gap-2 bg-inherit border-b border-surface-200 dark:border-surface-700 py-3 mb-3">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <span className="text-muted-color text-sm">Type &quot;help&quot; for available commands</span>
                        </Terminal.Welcome>

                        <Terminal.CommandList>
                            {state.commands.map((_, index) => (
                                <Terminal.Command key={index} index={index}>
                                    {(commandInstance: TerminalCommandInstance) => (
                                        <div className="flex flex-col gap-1">
                                            <div className="flex items-center">
                                                <AngleRight className="text-xs text-green-500 me-2" />
                                                <Terminal.CommandValue />
                                            </div>
                                            {commandInstance.command?.response && (
                                                <div className="ps-4">
                                                    <Terminal.CommandResponse />
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </Terminal.Command>
                            ))}
                        </Terminal.CommandList>

                        <Terminal.Prompt>
                            <Terminal.PromptLabel>
                                <AngleRight className="text-xs text-green-500 me-2" />
                            </Terminal.PromptLabel>
                            <Terminal.PromptValue />
                        </Terminal.Prompt>
                    </>
                );
            }}
        </Terminal.Root>
    );
}

```

### File System

An interactive file browser demonstrating navigation commands like `ls`, `cd`, `cat`, and `pwd`.

```tsx
'use client';
import { type TerminalResponse } from '@primereact/ui/terminal';
import { Terminal } from '@primereact/ui/terminal';
import * as React from 'react';

interface FileNode {
    name: string;
    type: 'file' | 'folder';
    children?: FileNode[];
    content?: string;
}

const fileSystem: FileNode = {
    name: '~',
    type: 'folder',
    children: [
        {
            name: 'documents',
            type: 'folder',
            children: [
                { name: 'report.pdf', type: 'file', content: '[Binary file - 2.4 MB]' },
                { name: 'notes.txt', type: 'file', content: 'Meeting notes from last week...' }
            ]
        },
        {
            name: 'projects',
            type: 'folder',
            children: [
                {
                    name: 'primereact',
                    type: 'folder',
                    children: [
                        { name: 'package.json', type: 'file', content: '{ "name": "primereact", "version": "11.0.0" }' },
                        { name: 'README.md', type: 'file', content: '# PrimeReact\nThe Most Complete UI Suite for React' }
                    ]
                }
            ]
        },
        { name: '.bashrc', type: 'file', content: 'export PATH=$PATH:/usr/local/bin' }
    ]
};

export default function FileSystemDemo() {
    const [currentPath, setCurrentPath] = React.useState<string[]>(['~']);

    const getCurrentFolder = React.useCallback((): FileNode => {
        let current = fileSystem;

        for (let i = 1; i < currentPath.length; i++) {
            const child = current.children?.find((c) => c.name === currentPath[i]);

            if (child && child.type === 'folder') {
                current = child;
            }
        }

        return current;
    }, [currentPath]);

    const commandHandler = React.useCallback(
        (text: string): TerminalResponse => {
            const parts = text.trim().split(/\s+/);
            const command = parts[0];
            const arg = parts.slice(1).join(' ');
            const folder = getCurrentFolder();

            switch (command) {
                case 'ls': {
                    const items = folder.children || [];

                    if (items.length === 0) {
                        return '(empty directory)';
                    }

                    return items.map((item) => (item.type === 'folder' ? `${item.name}/` : item.name)).join('  ');
                }

                case 'cd': {
                    if (!arg || arg === '~') {
                        setCurrentPath(['~']);

                        return undefined;
                    }

                    if (arg === '..') {
                        if (currentPath.length > 1) {
                            setCurrentPath((prev) => prev.slice(0, -1));
                        }

                        return undefined;
                    }

                    const target = folder.children?.find((c) => c.name === arg && c.type === 'folder');

                    if (target) {
                        setCurrentPath((prev) => [...prev, arg]);

                        return undefined;
                    }

                    return `cd: ${arg}: No such directory`;
                }

                case 'cat': {
                    if (!arg) {
                        return 'Usage: cat [filename]';
                    }

                    const file = folder.children?.find((c) => c.name === arg && c.type === 'file');

                    if (file) {
                        return file.content || '';
                    }

                    return `cat: ${arg}: No such file`;
                }

                case 'pwd':
                    return currentPath.join('/').replace('~/', '~/');

                case 'clear':
                    return null;

                case 'help':
                    return (
                        <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1">
                            <span className="text-green-500">ls</span>
                            <span className="text-muted-color">List directory contents</span>
                            <span className="text-green-500">cd [dir]</span>
                            <span className="text-muted-color">Change directory</span>
                            <span className="text-green-500">cat [file]</span>
                            <span className="text-muted-color">Display file contents</span>
                            <span className="text-green-500">pwd</span>
                            <span className="text-muted-color">Print working directory</span>
                            <span className="text-green-500">clear</span>
                            <span className="text-muted-color">Clear terminal</span>
                        </div>
                    );

                default:
                    return `${command}: command not found. Type "help" for available commands.`;
            }
        },
        [getCurrentFolder, currentPath]
    );

    const prompt = currentPath.join('/').replace('~/', '~/') + ' 

### AI Assistant

A chat-style interface with typing indicators, demonstrating how Terminal can be styled for conversational experiences.

```tsx
'use client';

const responses: Record<string, string> = {
    hello: "Hello! I'm your AI assistant. How can I help you today?",
    hi: 'Hi there! What can I do for you?',
    help: 'Here are some things you can ask me:\n• "What is PrimeReact?"\n• "How to install?"\n• "List components"\n• "Documentation"',
    'what is primereact':
        'PrimeReact is a rich set of open source UI components for React. It offers 90+ components including DataTable, Dialog, and more. Visit primereact.org to learn more.',
    'how to install': 'Install PrimeReact using npm or yarn:\n\nnpm install primereact\n\nThen import components as needed.',
    'list components': 'Button, DataTable, Dialog, Menu, DatePicker, Select, InputText ...and 80+ more',
    documentation:
        'Documentation is available at primereact.org/documentation. You can find guides, API references, and live examples for all components.'
};

    const [isTyping, setIsTyping] = React.useState(false);

    const commandHandler = async (text: string): Promise => {
        const query = text.toLowerCase().trim();

        if (query === 'clear') {
            return null;
        }

        setIsTyping(true);

        await new Promise((resolve) => setTimeout(resolve, 600));

        setIsTyping(false);

        return responses[query] || 'I\'m not sure about that. Try typing "help" to see what I can assist with.';
    };

    return (
        " onCommand={commandHandler} className="pt-0">
            {(instance: TerminalRootInstance) => {
                const { state } = instance;

                return (
                    <>
                            <div className="flex items-center gap-3 pb-2 border-b border-surface-200 dark:border-surface-700">
                                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-contrast">
                                </div>
                                <div>
                                    <div className="font-semibold">PrimeReact Assistant</div>
                                    <div className="text-muted-color text-sm">Ask me anything about PrimeReact</div>
                                </div>
                            </div>

                        <div className="flex flex-col gap-3 mt-3">
                            {(state.commands as TerminalCommandItem[]).map((command, index) => (
                                <div key={index} className="flex flex-col gap-2">
                                    <div className="flex items-start gap-2">
                                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-surface-200 dark:bg-surface-700 shrink-0 mt-0.5">
                                        </div>
                                        <span className="self-center">{command.text}</span>
                                    </div>
                                    {command.response && (
                                        <div className="flex items-start gap-2">
                                            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary shrink-0 mt-0.5">
                                            </div>
                                            <div className="flex-1 whitespace-pre-wrap self-center">{command.response}</div>
                                        </div>
                                    )}
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex items-center gap-2">
                                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary shrink-0">
                                    </div>
                                    <div className="flex gap-1">
                                        <span className="w-2 h-2 bg-muted-color rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                        <span className="w-2 h-2 bg-muted-color rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                        <span className="w-2 h-2 bg-muted-color rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                    </div>
                                </div>
                            )}
                        </div>

                    </>
                );
            }}
    );
}

```

## Related

### Sub-Components

See [Terminal Primitive](/docs/primitive/components/terminal#api) for the full sub-component API.

### Hooks

See [useTerminal](/docs/headless/components/terminal#api) for the headless hook API.

### Accessibility

See [Terminal Primitive](/docs/primitive/components/terminal#accessibility) for WAI-ARIA compliance details and keyboard support.
;

    return (
        <Terminal.Root prompt={prompt} onCommand={commandHandler}>
            <Terminal.Welcome>File System Browser - Type &quot;help&quot; for available commands.</Terminal.Welcome>
            <Terminal.CommandList />
            <Terminal.Prompt />
        </Terminal.Root>
    );
}

```

### AI Assistant

A chat-style interface with typing indicators, demonstrating how Terminal can be styled for conversational experiences.

## Related

### Sub-Components

See [Terminal Primitive](../../primitive/components/terminal.md#api) for the full sub-component API.

### Hooks

See [useTerminal](../../headless/components/terminal.md#api) for the headless hook API.

### Accessibility

See [Terminal Primitive](../../primitive/components/terminal.md#accessibility) for WAI-ARIA compliance details and keyboard support.

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-terminal | Class name of the root element |
| p-terminal-welcome-message | Class name of the welcome element |
| p-terminal-command-list | Class name of the command list element |
| p-terminal-command | Class name of the command element |
| p-terminal-command-value | Class name of the command value element |
| p-terminal-command-response | Class name of the command response element |
| p-terminal-prompt | Class name of the prompt element |
| p-terminal-prompt-label | Class name of the prompt label element |
| p-terminal-prompt-value | Class name of the prompt value element |

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| terminal.background | --p-terminal-background | Background of root |
| terminal.border.color | --p-terminal-border-color | Border color of root |
| terminal.color | --p-terminal-color | Color of root |
| terminal.height | --p-terminal-height | Height of root |
| terminal.padding | --p-terminal-padding | Padding of root |
| terminal.border.radius | --p-terminal-border-radius | Border radius of root |
| terminal.font.weight | --p-terminal-font-weight | Font weight of root |
| terminal.font.size | --p-terminal-font-size | Font size of root |
| terminal.prompt.gap | --p-terminal-prompt-gap | Gap of prompt |
| terminal.command.response.margin | --p-terminal-command-response-margin | Margin of command response |
