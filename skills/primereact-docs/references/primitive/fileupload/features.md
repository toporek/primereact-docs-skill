# FileUpload

An unstyled file upload component with drag-and-drop, validation, and progress tracking.

Build fully custom file uploaders with complete control over layout, file lists, and drag-and-drop zones.

```tsx
'use client';
import { Plus } from '@primeicons/react/plus';
import { Times } from '@primeicons/react/times';
import { Upload } from '@primeicons/react/upload';
import { FileUpload, FileUploadRootInstance } from 'primereact/fileupload';
import styles from './basic-demo.module.css';

export default function BasicDemo() {
    return (
        <div className="max-w-xl mx-auto">
            <FileUpload.Root className={styles.root} name="demo[]" url="/api/upload" accept="image/*" multiple maxFileSize={1000000}>
                {(instance: FileUploadRootInstance) => {
                    const { state, hasFiles, hasUploadedFiles, choose, upload, clear, remove, removeUploadedFile } = instance;

                    return (
                        <>
                            <div className={styles.toolbar}>
                                <button onClick={choose} className={styles.chooseButton}>
                                    <Plus />
                                    Choose
                                </button>
                                <button onClick={upload} disabled={!hasFiles} className={styles.secondaryButton}>
                                    <Upload />
                                    Upload
                                </button>
                                <button onClick={clear} disabled={!hasFiles} className={styles.secondaryButton}>
                                    <Times />
                                    Cancel
                                </button>
                            </div>
                            {state.messages && state.messages.length > 0 && (
                                <div className={styles.messages}>
                                    {state.messages.map((msg, i) => (
                                        <div key={i} className={styles.message}>
                                            {msg}
                                        </div>
                                    ))}
                                </div>
                            )}
                            <FileUpload.Content className={styles.content}>
                                {hasFiles || hasUploadedFiles ? (
                                    <FileUpload.ItemGroup className={styles.fileList}>
                                        {state.files.map((file, i) => (
                                            <FileUpload.Item key={`pending-${file.name}-${file.size}`} file={file} index={i} className={styles.file}>
                                                {file.type.startsWith('image/') && <FileUpload.ItemPreview className={styles.fileThumbnail} />}
                                                <FileUpload.ItemInfo className={styles.fileInfo}>
                                                    <FileUpload.ItemName className={styles.fileName} />
                                                    <FileUpload.ItemSize className={styles.fileSize} />
                                                </FileUpload.ItemInfo>
                                                <span className={styles.badgePending}>Pending</span>
                                                <FileUpload.Remove onClick={() => remove(i)} className={styles.removeButton}>
                                                    <Times />
                                                </FileUpload.Remove>
                                            </FileUpload.Item>
                                        ))}
                                        {state.uploadedFiles.map((file, i) => (
                                            <FileUpload.Item key={`uploaded-${file.name}-${file.size}`} file={file} index={i} className={styles.file}>
                                                {file.type.startsWith('image/') && <FileUpload.ItemPreview className={styles.fileThumbnail} />}
                                                <FileUpload.ItemInfo className={styles.fileInfo}>
                                                    <FileUpload.ItemName className={styles.fileName} />
                                                    <FileUpload.ItemSize className={styles.fileSize} />
                                                </FileUpload.ItemInfo>
                                                <span className={styles.badgeUploaded}>Uploaded</span>
                                                <FileUpload.Remove onClick={() => removeUploadedFile(i)} className={styles.removeButton}>
                                                    <Times />
                                                </FileUpload.Remove>
                                            </FileUpload.Item>
                                        ))}
                                    </FileUpload.ItemGroup>
                                ) : (
                                    <div className={styles.dropMessage}>Drag and drop files here to upload.</div>
                                )}
                            </FileUpload.Content>
                            {state.progress > 0 && (
                                <div className={styles.progressTrack}>
                                    <div className={styles.progressBar} style={{ width: `${state.progress}%` }} />
                                </div>
                            )}
                        </>
                    );
                }}
            </FileUpload.Root>
        </div>
    );
}
```

## Features

- Compound component API with sub-components: `Root`, `Content`, `List`, `ItemGroup`, `Item`, `ItemPreview`, `ItemInfo`, `ItemName`, `ItemSize`, `Remove`
- Built-in file type and size validation with configurable error messages
- Drag-and-drop file selection with visual highlight feedback
- XMLHttpRequest-based upload with progress tracking
- Custom upload handler support for client-side file processing
- Separate tracking of pending and uploaded files
- Composable file item rendering with `Item` context providing file data to nested sub-components

## Usage

```tsx
import { FileUpload } from 'primereact/fileupload';
```

```tsx
<FileUpload.Root>
    <FileUpload.Content>
        <FileUpload.ItemGroup>
            <FileUpload.Item>
                <FileUpload.ItemPreview />
                <FileUpload.ItemInfo>
                    <FileUpload.ItemName />
                    <FileUpload.ItemSize />
                </FileUpload.ItemInfo>
                <FileUpload.Remove></FileUpload.Remove>
            </FileUpload.Item>
        </FileUpload.ItemGroup>
    </FileUpload.Content>
</FileUpload.Root>
```

## Behavior

### Polymorphic Rendering

Use `as` on any sub-component to change the rendered HTML element.

```tsx
<FileUpload.Root as="section">
    <FileUpload.Content as="main"></FileUpload.Content>
</FileUpload.Root>
```

Default elements: `Root`=`div`, `Content`=`div`, `List`=`div`, `ItemGroup`=`div`, `Item`=`div`, `ItemPreview`=`img`, `ItemInfo`=`div`, `ItemName`=`div`, `ItemSize`=`div`, `Remove`=`button`.

### Render Function Children

`Root` accepts a render function as children, providing access to the component instance with state, methods, and computed properties.

```tsx
<FileUpload.Root>
    {(instance) => (
        <>
            <button onClick={instance.choose}>Choose Files</button>
            <button onClick={instance.upload}>Upload</button>
            <FileUpload.Content>
                <FileUpload.ItemGroup>
                    {instance.state.files.map((file, index) => (
                        <FileUpload.Item key={file.name + file.size} file={file} index={index}>
                            <FileUpload.ItemPreview />
                            <FileUpload.ItemInfo>
                                <FileUpload.ItemName />
                                <FileUpload.ItemSize />
                            </FileUpload.ItemInfo>
                            <FileUpload.Remove onClick={() => instance.remove(index)}>Remove</FileUpload.Remove>
                        </FileUpload.Item>
                    ))}
                </FileUpload.ItemGroup>
            </FileUpload.Content>
        </>
    )}
</FileUpload.Root>
```

## Pass Through

**Pass Through example:**

```tsx
'use client';
import { CloudUpload } from '@primeicons/react/cloud-upload';
import { Times } from '@primeicons/react/times';
import { FileUpload, type FileUploadRootInstance } from '@primereact/ui/fileupload';

export default function FileUploadPTDemo() {
    return (
        <FileUpload.Root name="demo[]" url="/api/upload" multiple accept="image/*" maxFileSize={1000000} className="w-[240px]">
            {(instance: FileUploadRootInstance) => {
                const { state, hasFiles, choose, upload, clear, remove } = instance;

                return (
                    <FileUpload.Content className="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded-xl p-8 transition-colors">
                        {hasFiles ? (
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-muted-color">{state.files.length} file(s) selected</span>
                                    <div className="flex items-center gap-2">
                                        <button onClick={upload} className="text-sm text-primary hover:text-primary-emphasis cursor-pointer">
                                            Upload
                                        </button>
                                        <button onClick={clear} className="text-sm text-red-500 hover:text-red-700 cursor-pointer">
                                            Clear all
                                        </button>
                                    </div>
                                </div>
                                <FileUpload.ItemGroup>
                                    {state.files.map((file, index) => (
                                        <FileUpload.Item
                                            key={file.name + file.size}
                                            file={file}
                                            index={index}
                                            className="flex items-center justify-between p-3 bg-surface-50 dark:bg-surface-800 rounded-lg"
                                        >
                                            <div className="flex items-center gap-3">
                                                <CloudUpload className="text-primary" />
                                                <FileUpload.ItemInfo>
                                                    <FileUpload.ItemName className="text-sm font-medium" />
                                                    <FileUpload.ItemSize className="text-xs text-muted-color" />
                                                </FileUpload.ItemInfo>
                                            </div>
                                            <FileUpload.Remove
                                                onClick={() => remove(index)}
                                                className="text-muted-color hover:text-red-500 cursor-pointer"
                                            >
                                                <Times />
                                            </FileUpload.Remove>
                                        </FileUpload.Item>
                                    ))}
                                </FileUpload.ItemGroup>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center gap-3 py-8 cursor-pointer" onClick={choose}>
                                <CloudUpload className="w-12! h-12! text-muted-color" />
                                <div className="text-center">
                                    <p className="text-lg font-medium mt-0 mb-1">Drop files here</p>
                                    <p className="text-sm text-muted-color m-0">or click to browse</p>
                                </div>
                            </div>
                        )}
                    </FileUpload.Content>
                );
            }}
        </FileUpload.Root>
    );
}
```

## API

### FileUploadRoot

> **API/props table for `FileUploadRoot` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `FileUploadRoot` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### FileUploadContent

> **API/props table for `FileUploadContent` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute        | Value                                         |
| ---------------- | --------------------------------------------- |
| `data-highlight` | `"true"` when files are dragged over the zone |

> **API/props table for `FileUploadContent` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### FileUploadList

> **API/props table for `FileUploadList` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `FileUploadList` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### FileUploadItemGroup

> **API/props table for `FileUploadItemGroup` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `FileUploadItemGroup` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### FileUploadItem

> **API/props table for `FileUploadItem` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `FileUploadItem` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### FileUploadItemPreview

> **API/props table for `FileUploadItemPreview` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `FileUploadItemPreview` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### FileUploadItemInfo

> **API/props table for `FileUploadItemInfo` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `FileUploadItemInfo` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### FileUploadItemName

> **API/props table for `FileUploadItemName` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `FileUploadItemName` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### FileUploadItemSize

> **API/props table for `FileUploadItemSize` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `FileUploadItemSize` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### FileUploadRemove

> **API/props table for `FileUploadRemove` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `FileUploadRemove` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

### Screen Reader

FileUpload uses a hidden native `input[type="file"]` element for file selection. The choose button triggers this input programmatically. File thumbnails use `role="presentation"` to indicate decorative images. Error messages are rendered as visible text for screen reader announcement.

### Keyboard Support

| Key               | Function                                                                               |
| ----------------- | -------------------------------------------------------------------------------------- |
| `tab`             | Moves focus between the choose, upload, cancel buttons and file remove buttons.        |
| `enter` / `space` | Activates the focused button. Opens the file dialog when the choose button is focused. |
