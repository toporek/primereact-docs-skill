# useFileUpload

Hook that manages file selection, validation, upload progress, and drag-and-drop state.

```tsx
'use client';
import { Plus } from '@primeicons/react/plus';
import { Times } from '@primeicons/react/times';
import { Upload } from '@primeicons/react/upload';
import { useFileUpload } from '@primereact/headless/fileupload';
import type { UseFileUploadChangeEvent } from '@primereact/types/headless/fileupload';
import * as React from 'react';

export default function BasicDemo() {
    const [messages, setMessages] = React.useState<string[]>([]);

    const {
        state,
        hasFiles,
        hasUploadedFiles,
        rootProps,
        chooseProps,
        uploadProps,
        inputProps,
        contentProps,
        fileListProps,
        fileProps,
        fileThumbnailProps,
        fileInfoProps,
        fileNameProps,
        fileSizeProps,
        fileRemoveProps,
        clear,
        remove,
        removeUploadedFile,
        formatSize
    } = useFileUpload({
        name: 'demo[]',
        url: '/api/upload',
        accept: 'image/*',
        multiple: true,
        maxFileSize: 1000000,
        onChange: (event: UseFileUploadChangeEvent) => setMessages(event.rejectedFiles.flatMap((r) => r.errors.map((e) => e.message)))
    });

    return (
        <div {...rootProps} className="max-w-xl mx-auto">
            <input {...inputProps} className="hidden" />
            <div className="flex items-center gap-3 mb-4">
                <button
                    {...chooseProps}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-contrast rounded cursor-pointer text-sm font-medium hover:bg-primary-emphasis transition"
                >
                    <Plus className="text-xs" />
                    Choose
                </button>
                <button
                    {...uploadProps}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-surface-100 dark:bg-surface-800 text-surface-700 dark:text-surface-200 rounded cursor-pointer text-sm font-medium hover:bg-surface-200 dark:hover:bg-surface-700 transition disabled:opacity-50 disabled:pointer-events-none"
                >
                    <Upload className="text-xs" />
                    Upload
                </button>
                <button
                    onClick={clear}
                    disabled={!hasFiles}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-surface-100 dark:bg-surface-800 text-surface-700 dark:text-surface-200 rounded cursor-pointer text-sm font-medium hover:bg-surface-200 dark:hover:bg-surface-700 transition disabled:opacity-50 disabled:pointer-events-none"
                >
                    <Times className="text-xs" />
                    Cancel
                </button>
            </div>
            {messages.length > 0 && (
                <div className="mb-4 flex flex-col gap-2">
                    {messages.map((msg, i) => (
                        <div
                            key={i}
                            className="text-sm px-3 py-2 rounded bg-red-50 dark:bg-red-950 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800"
                        >
                            {msg}
                        </div>
                    ))}
                </div>
            )}
            <div
                {...contentProps}
                className="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded-lg p-6 text-center transition data-[p-highlight=true]:border-primary data-[p-highlight=true]:bg-primary/5"
            >
                {hasFiles || hasUploadedFiles ? (
                    <div {...fileListProps} className="flex flex-col gap-3">
                        {state.files.map((file, i) => (
                            <div key={`pending-${file.name}-${file.size}`} {...fileProps} className="flex items-center gap-3 text-left">
                                {file.type.startsWith('image/') && (
                                    <img
                                        {...fileThumbnailProps}
                                        src={URL.createObjectURL(file)}
                                        alt={file.name}
                                        className="w-10 h-10 rounded object-cover"
                                    />
                                )}
                                <div {...fileInfoProps} className="flex-1 min-w-0">
                                    <div {...fileNameProps} className="text-sm font-medium text-surface-700 dark:text-surface-200 truncate">
                                        {file.name}
                                    </div>
                                    <div {...fileSizeProps} className="text-xs text-surface-500">
                                        {formatSize(file.size)}
                                    </div>
                                </div>
                                <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300">
                                    Pending
                                </span>
                                <button
                                    {...fileRemoveProps}
                                    onClick={() => remove(i)}
                                    className="w-8 h-8 flex items-center justify-center rounded-full text-surface-400 hover:text-red-500 hover:bg-surface-100 dark:hover:bg-surface-800 cursor-pointer transition"
                                >
                                    <Times className="text-xs" />
                                </button>
                            </div>
                        ))}
                        {state.uploadedFiles.map((file, i) => (
                            <div key={`uploaded-${file.name}-${file.size}`} {...fileProps} className="flex items-center gap-3 text-left">
                                {file.type.startsWith('image/') && (
                                    <img
                                        {...fileThumbnailProps}
                                        src={URL.createObjectURL(file)}
                                        alt={file.name}
                                        className="w-10 h-10 rounded object-cover"
                                    />
                                )}
                                <div {...fileInfoProps} className="flex-1 min-w-0">
                                    <div {...fileNameProps} className="text-sm font-medium text-surface-700 dark:text-surface-200 truncate">
                                        {file.name}
                                    </div>
                                    <div {...fileSizeProps} className="text-xs text-surface-500">
                                        {formatSize(file.size)}
                                    </div>
                                </div>
                                <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300">
                                    Uploaded
                                </span>
                                <button
                                    {...fileRemoveProps}
                                    onClick={() => removeUploadedFile(i)}
                                    className="w-8 h-8 flex items-center justify-center rounded-full text-surface-400 hover:text-red-500 hover:bg-surface-100 dark:hover:bg-surface-800 cursor-pointer transition"
                                >
                                    <Times className="text-xs" />
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-surface-400">Drag and drop files here to upload.</div>
                )}
            </div>
            {state.progress > 0 && (
                <div className="mt-3 h-1.5 rounded-full bg-surface-100 dark:bg-surface-800 overflow-hidden">
                    <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${state.progress}%` }} />
                </div>
            )}
        </div>
    );
}

```

## Usage

```tsx
import { useFileUpload } from '@primereact/headless/fileupload';
```

```tsx
const fileupload = useFileUpload({ accept: 'image/*', multiple: true });

<div {...fileupload.rootProps}>
    <input {...fileupload.inputProps} />
    <button {...fileupload.chooseProps}></button>
    <button {...fileupload.uploadProps}></button>
    <div {...fileupload.contentProps}>
        <div {...fileupload.fileListProps}>
            <div {...fileupload.fileProps}>
                <img {...fileupload.fileThumbnailProps} />
                <div {...fileupload.fileInfoProps}>
                    <div {...fileupload.fileNameProps}></div>
                    <div {...fileupload.fileSizeProps}></div>
                </div>
                <button {...fileupload.fileRemoveProps}></button>
            </div>
        </div>
    </div>
</div>;
```

`useFileUpload` manages file selection, type and size validation, upload progress, and drag-and-drop state. See [Primitive](../../primitive/components/fileupload.md) for a component-based API.

## Features

- **Validation pipeline**, enforces `accept` patterns (including wildcards), `maxFileSize`, and `fileLimit`, surfacing failures through the `onError` and `onChange` callbacks (each rejected file grouped with its errors)
- **Upload transport**, built-in XMLHttpRequest POST with FormData and progress reporting, or bring-your-own via `customUpload` + `uploadHandler`
- **Drag-and-drop surface**, `contentProps` wires the drop zone events and exposes `data-highlight` during drag-over
- **File and upload state**, `state.files`, `state.uploadedFiles`, `state.progress`, and `hasFiles` / `hasUploadedFiles` booleans for rendering
- **Imperative controls**, `choose`, `upload`, `clear`, `remove(index)`, and `removeUploadedFile(index)` for custom UI
- **File-level prop getters**, `fileProps`, `fileThumbnailProps`, `fileInfoProps`, `fileNameProps`, `fileSizeProps`, and `fileRemoveProps` for each row
- **`formatSize(bytes)`**, utility for rendering human-readable file sizes

## Working with callbacks

### Server upload with lifecycle hooks

Set `url` and `name` for the built-in XHR transport and tap into the lifecycle to log, mutate headers, or surface errors.

```tsx
const fileupload = useFileUpload({
    url: '/api/upload',
    name: 'files[]',
    onBeforeSend: (e) => e.xhr.setRequestHeader('x-csrf', csrf),
    onProgress: (e) => setProgress(e.progress),
    onUpload: (e) => toast.success(`Uploaded ${e.files.length} files`),
    onError: (e) => {
        if (e.type === 'upload') toast.error(`Upload failed: ${e.xhr.status}`);
        else toast.error(`${e.rejectedFiles.length} file(s) rejected`);
    }
});
```

### Auto upload after selection

Set `auto` so files post immediately, useful for avatars or drag-drop drop zones without a separate submit step.

```tsx
const fileupload = useFileUpload({
    auto: true,
    url: '/api/upload',
    name: 'files'
});
```

### Custom client-side processing

Set `customUpload` and provide `uploadHandler` when you need to resize images, strip EXIF, or hand files off to a signed-URL flow.

```tsx
const fileupload = useFileUpload({
    customUpload: true,
    uploadHandler: async (e) => {
        await uploadToS3(e.files);
        e.options.clear();
    }
});
```

### Rendering the file list

Iterate `state.files` and spread the file-level getters for consistent `data-scope` / `data-part` attributes on each row.

```tsx
<div {...fileupload.fileListProps}>
    {fileupload.state.files.map((file, i) => (
        <div key={file.name + file.size} {...fileupload.fileProps}>
            <img {...fileupload.fileThumbnailProps} src={URL.createObjectURL(file)} />
            <div {...fileupload.fileInfoProps}>
                <div {...fileupload.fileNameProps}>{file.name}</div>
                <div {...fileupload.fileSizeProps}>{fileupload.formatSize(file.size)}</div>
            </div>
            <button {...fileupload.fileRemoveProps} onClick={() => fileupload.remove(i)}>
                Remove
            </button>
        </div>
    ))}
</div>
```

### Surfacing validation errors

There is no `state.messages`, validation results flow through callbacks, so you own the message list. Use `onChange` to keep a synced list (it fires on every change with the full `rejectedFiles`, so a clean selection clears it), or `onError` to react per selection. Each rejected file groups its errors as `{ file?, errors: [{ reason, message }] }`.

```tsx
const [messages, setMessages] = React.useState<string[]>([]);

const fileupload = useFileUpload({
    accept: 'image/*',
    maxFileSize: 1_000_000,
    onChange: (e) => setMessages(e.rejectedFiles.flatMap((r) => r.errors.map((err) => err.message)))
});

{
    messages.map((msg, i) => (
        <div key={i} role="alert">
            {msg}
        </div>
    ));
}
```

## Styling with data attributes

The drop zone lights up via `data-highlight="true"` during drag-over; every prop object exposes a `data-part` for CSS targeting.

```css
[data-scope='fileupload'][data-part='content'][data-highlight='true'] {
    border-color: var(--primary);
    background: var(--primary-bg);
}

[data-scope='fileupload'][data-part='content'] { ... }
[data-scope='fileupload'][data-part='file'] { ... }
[data-scope='fileupload'][data-part='fileThumbnail'] { ... }
[data-scope='fileupload'][data-part='fileInfo'] { ... }
[data-scope='fileupload'][data-part='fileName'] { ... }
[data-scope='fileupload'][data-part='fileSize'] { ... }
[data-scope='fileupload'][data-part='fileList'] { ... }
[data-scope='fileupload'][data-part='fileRemove'] { ... }
```

## API

### useFileUpload

> **API/props table for `useFileUpload` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

Space or Enter opens the file picker, and dropped files trigger onSelect with standard drag events. See [Primitive](../../primitive/components/fileupload.md#accessibility) for full WAI-ARIA compliance details.
