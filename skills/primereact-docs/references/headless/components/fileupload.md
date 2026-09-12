# useFileUpload

Hook that manages file selection, validation, upload progress, and drag-and-drop state.

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

> **`useFileUpload` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/fileupload or the installed `@primereact/types`.

## Accessibility

Space or Enter opens the file picker, and dropped files trigger onSelect with standard drag events. See [Primitive](../../primitive/components/fileupload.md#accessibility) for full WAI-ARIA compliance details.
