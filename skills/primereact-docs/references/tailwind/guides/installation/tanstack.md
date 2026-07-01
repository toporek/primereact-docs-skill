# With TanStack

Setting up PrimeReact Tailwind components in a TanStack Start project.

{/* 
Start from our <a href="https://github.com/primefaces/primereact-examples/tree/main/tanstack-styled-tailwind" target="_blank" rel="noopener noreferrer">TanStack + Tailwind template</a>, pre-configured with PrimeReact.
 */}

## Installation

PrimeReact Tailwind components are distributed through a shadcn-compatible registry, each component is copied into your codebase, so there is no theme file or runtime theme provider to set up.

### Install Packages

Install PrimeReact and the icon package using your favorite package manager:

```bash
npm install primereact@11.0.0-rc.1 @primeuix/themes@3.0.0-rc.1
```

### Add the `cn` Helper

The components rely on a `cn` utility to merge class names. Install `tailwind-merge` and `clsx`:

```bash
npm install tailwind-merge clsx
```

Then create `lib/utils.ts` and add the helper:

```ts showLineNumbers title="lib/utils.ts"
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
```

### Add Components

You can add a component with the shadcn CLI, or add it manually. For example, to add the Button component with the CLI:

```bash
npx shadcn@latest add https://primereact.dev/r/button.json
```

To add it manually instead, head to the [Button](../../components/button.md) component page and follow the install steps there.

Once added, import the component and render it to verify your setup:

```tsx showLineNumbers {1}
import { Button } from '@/components/ui/button';

export default function VerifyInstallation() {
    return (
        <div className="card flex justify-center">
            <Button>Verify</Button>
        </div>
    );
}
```

## More Tips

- Browse any component page to copy its individual `shadcn add` command or source code.
- Components live in your codebase, edit the files under `@/components/ui` to customize them freely.

## Troubleshooting

If you encounter issues during installation or setup, check the following:

- Ensure that you have the latest version of TanStack Start and Node.js installed.
- Confirm the `@/*` path alias is configured in `tsconfig.json` so component imports resolve.
- Verify that the `cn` helper exists at `lib/utils.ts` and that `tailwind-merge` and `clsx` are installed.
- Check the browser console for any errors related to PrimeReact components or styles.
- Refer to the [PrimeReact GitHub repository](https://github.com/primefaces/primereact) for more information and support.
