# useFileUpload

Hook that manages file selection, validation, upload progress, and drag-and-drop state.

```tsx
'use client';
import { Plus } from '@primeicons/react/plus';
import { Times } from '@primeicons/react/times';
import { Upload } from '@primeicons/react/upload';
import { useFileUpload } from '@primereact/headless/fileupload';

export default function BasicDemo() {
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
    } = useFileUpload({ name: 'demo[]', url: '/api/upload', accept: 'image/*', multiple: true, maxFileSize: 1000000 });

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
            {state.messages && state.messages.length > 0 && (
                <div className="mb-4 flex flex-col gap-2">
                    {state.messages.map((msg, i) => (
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

```tsx showLineNumbers {1,3,6-16,18}
import { useFileUpload } from '@primereact/headless/fileupload';

const fileupload = useFileUpload({ accept: 'image/*', multiple: true });

return (
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
    </div>
);
```

`useFileUpload` manages file selection, type/size validation, upload progress, and drag-and-drop — see [Primitive](../../primitive/fileupload/features.md) for a component-based API.

## Features

- Returns spread-ready prop objects (`inputProps`, `contentProps`, `fileListProps`, `fileProps`, `fileThumbnailProps`, `fileInfoProps`, `fileNameProps`, `fileSizeProps`, `fileRemoveProps`) with data attributes and event handlers
- File type validation against `accept` patterns including wildcards (`image/*`)
- File size validation with configurable `maxFileSize` limit
- File count restriction via `fileLimit`
- Upload progress tracking via XMLHttpRequest with `state.progress`
- Imperative methods: `choose()`, `upload()`, `clear()`, `remove(index)`, `removeUploadedFile(index)`
- Exposes `state.files`, `state.uploadedFiles`, `state.messages`, `state.progress`
- Utility: `formatSize(bytes)` for human-readable file sizes
- `hasFiles` and `hasUploadedFiles` computed booleans

## Behavior

### File Type Restriction

Set `accept` to restrict file types using MIME types or extensions. Supports wildcard patterns like `image/*`.

```tsx
const fileupload = useFileUpload({ accept: 'image/*' });
```

### Multiple Files

Set `multiple` to allow selecting more than one file at a time.

```tsx
const fileupload = useFileUpload({ multiple: true });
```

### Max File Size

Set `maxFileSize` in bytes to validate file sizes. Invalid files produce messages in `state.messages`.

```tsx
const fileupload = useFileUpload({ maxFileSize: 1000000 }); // 1MB
```

### File Limit

Set `fileLimit` to restrict the total number of files that can be uploaded.

```tsx
const fileupload = useFileUpload({ fileLimit: 5 });
```

### Auto Upload

Set `auto` to upload files immediately after selection without a manual upload step.

```tsx
const fileupload = useFileUpload({ auto: true, url: '/api/upload', name: 'files' });
```

### Server Upload

Set `url` and `name` to upload files via XMLHttpRequest POST. The hook handles FormData construction and progress tracking.

```tsx
const fileupload = useFileUpload({
    url: '/api/upload',
    name: 'files[]',
    onUpload: (e) => console.log('Uploaded', e.files),
    onError: (e) => console.log('Error', e.xhr.status)
});
```

### Custom Upload

Set `customUpload` and provide `uploadHandler` to override the default XMLHttpRequest upload with custom logic.

```tsx
const fileupload = useFileUpload({
    customUpload: true,
    uploadHandler: (e) => {
        // Process files client-side
        e.options.clear();
    }
});
```

### Upload Lifecycle Callbacks

The hook provides callbacks for each stage of the upload lifecycle.

```tsx
const fileupload = useFileUpload({
    url: '/api/upload',
    name: 'files',
    onBeforeUpload: (e) => {
        /* customize xhr before send */
    },
    onBeforeSend: (e) => {
        /* modify formData or headers */
    },
    onProgress: (e) => console.log(e.progress + '%'),
    onUpload: (e) => console.log('Success'),
    onError: (e) => console.log('Failed')
});
```

### Removing Files

Use `remove(index)` to remove a pending file and `removeUploadedFile(index)` to remove an uploaded file. Both trigger the `onRemove` callback.

```tsx
fileupload.remove(0); // Remove first pending file
fileupload.removeUploadedFile(0); // Remove first uploaded file
```

### Drag-and-Drop Feedback

The `contentProps` object includes drag event handlers and a callback ref for the drop zone. The content element receives `data-highlight="true"` during drag-over.

```css
[data-scope='fileupload'][data-part='content'][data-highlight='true'] {
    border-color: var(--primary);
    background: var(--primary-bg);
}
```

### File-Level Prop Getters

The hook returns prop getter objects for each file-level element. Spread these on corresponding DOM elements to apply `data-scope` and `data-part` attributes.

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

### Formatting File Sizes

Use `formatSize(bytes)` to convert byte counts to human-readable strings.

```tsx
fileupload.formatSize(1048576); // "1 MB"
```

### Custom Styling with Data Attributes

```css
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

See [FileUpload Primitive](../../primitive/fileupload/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
