# FileUpload

An unstyled file upload component with drag-and-drop, validation, and progress tracking.

Build fully custom file uploaders with complete control over layout, file lists, and drag-and-drop zones.

```tsx
'use client';
import { Plus } from '@primeicons/react/plus';
import { Times } from '@primeicons/react/times';
import { Upload } from '@primeicons/react/upload';
import type { FileUploadChangeEvent } from 'primereact/fileupload';
import { FileUpload, FileUploadRootInstance } from 'primereact/fileupload';
import * as React from 'react';
import styles from './basic-demo.module.css';

export default function BasicDemo() {
    const [messages, setMessages] = React.useState<string[]>([]);

    return (
        <div className="max-w-xl mx-auto">
            <FileUpload.Root
                className={styles.root}
                name="demo[]"
                url="/api/upload"
                accept="image/*"
                multiple
                maxFileSize={1000000}
                onChange={(event: FileUploadChangeEvent) => setMessages(event.rejectedFiles.flatMap((r) => r.errors.map((e) => e.message)))}
            >
                {(instance: FileUploadRootInstance) => {
                    const { state, hasFiles, hasUploadedFiles, choose, upload, clear } = instance;

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
                            {messages.length > 0 && (
                                <div className={styles.messages}>
                                    {messages.map((msg, i) => (
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
                                                <FileUpload.ItemRemove className={styles.removeButton}>
                                                    <Times />
                                                </FileUpload.ItemRemove>
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
                                                <FileUpload.ItemRemove className={styles.removeButton}>
                                                    <Times />
                                                </FileUpload.ItemRemove>
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

- Compound component API with sub-components: `Root`, `Trigger`, `Upload`, `Clear`, `Content`, `ItemGroup`, `Item`, `ItemPreview`, `ItemInfo`, `ItemName`, `ItemSize`, `ItemRemove`
- Self-wired action components, `Trigger` (open dialog), `Upload`, `Clear` and `ItemRemove` read the context and need no manual handlers
- Built-in file type, size and limit validation surfaced through the `onError` / `onChange` callbacks
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
    <FileUpload.Trigger>Choose</FileUpload.Trigger>
    <FileUpload.Upload>Upload</FileUpload.Upload>
    <FileUpload.Clear>Clear</FileUpload.Clear>
    <FileUpload.Content>
        <FileUpload.ItemGroup>
            <FileUpload.Item file={file} index={index}>
                <FileUpload.ItemPreview />
                <FileUpload.ItemInfo>
                    <FileUpload.ItemName />
                    <FileUpload.ItemSize />
                </FileUpload.ItemInfo>
                <FileUpload.ItemRemove />
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

Default elements: `Root`=`div`, `Trigger`=`button`, `Upload`=`button`, `Clear`=`button`, `Content`=`div`, `ItemGroup`=`div`, `Item`=`div`, `ItemPreview`=`img`, `ItemInfo`=`div`, `ItemName`=`div`, `ItemSize`=`div`, `ItemRemove`=`button`.

### Render Function Children

`Root` accepts a render function as children, providing access to the component instance with state, methods, and computed properties.

```tsx
<FileUpload.Root>
    {(instance) => (
        <>
            <FileUpload.Trigger>Choose Files</FileUpload.Trigger>
            <FileUpload.Upload>Upload</FileUpload.Upload>
            <FileUpload.Content>
                <FileUpload.ItemGroup>
                    {instance.state.files.map((file, index) => (
                        <FileUpload.Item key={file.name + file.size} file={file} index={index}>
                            <FileUpload.ItemPreview />
                            <FileUpload.ItemInfo>
                                <FileUpload.ItemName />
                                <FileUpload.ItemSize />
                            </FileUpload.ItemInfo>
                            <FileUpload.ItemRemove>Remove</FileUpload.ItemRemove>
                        </FileUpload.Item>
                    ))}
                </FileUpload.ItemGroup>
            </FileUpload.Content>
        </>
    )}
</FileUpload.Root>
```

## Pass Through

## API

### FileUploadRoot

> **API/props table for `FileUploadRoot` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | FileUploadRootPassThroughType> | Used to pass attributes to the root's DOM element. |
| content | FileUploadRootPassThroughType> | Used to pass attributes to the content's DOM element. |
| fileList | FileUploadRootPassThroughType> | Used to pass attributes to the file list's DOM element. |
| file | FileUploadRootPassThroughType> | Used to pass attributes to the file's DOM element. |
| fileThumbnail | FileUploadRootPassThroughType> | Used to pass attributes to the file thumbnail's DOM element. |
| fileInfo | FileUploadRootPassThroughType> | Used to pass attributes to the file info's DOM element. |
| fileName | FileUploadRootPassThroughType> | Used to pass attributes to the fileName's DOM element. |
| fileSize | FileUploadRootPassThroughType> | Used to pass attributes to the fileSize's DOM element. |
| fileActions | FileUploadRootPassThroughType> | Used to pass attributes to the file actions' DOM element. |
| fileRemove | FileUploadRootPassThroughType> | Used to pass attributes to the file remove button's DOM element. |

### FileUploadTrigger

> **API/props table for `FileUploadTrigger` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | FileUploadTriggerPassThroughType> | Used to pass attributes to the root's DOM element. |

### FileUploadUpload

> **API/props table for `FileUploadUpload` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | FileUploadUploadPassThroughType> | Used to pass attributes to the root's DOM element. |

### FileUploadClear

> **API/props table for `FileUploadClear` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | FileUploadClearPassThroughType> | Used to pass attributes to the root's DOM element. |

### FileUploadContent

> **API/props table for `FileUploadContent` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute        | Value                                         |
| ---------------- | --------------------------------------------- |
| `data-highlight` | `"true"` when files are dragged over the zone |

| Label | Type | Description |
|:------|:------|:------|
| root | FileUploadContentPassThroughType> | Used to pass attributes to the root's DOM element. |

### FileUploadItemGroup

> **API/props table for `FileUploadItemGroup` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | FileUploadItemGroupPassThroughType> | Used to pass attributes to the root's DOM element. |

### FileUploadItem

> **API/props table for `FileUploadItem` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | FileUploadItemPassThroughType> | Used to pass attributes to the root's DOM element. |

### FileUploadItemPreview

> **API/props table for `FileUploadItemPreview` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | FileUploadItemPreviewPassThroughType> | Used to pass attributes to the root's DOM element. |

### FileUploadItemInfo

> **API/props table for `FileUploadItemInfo` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | FileUploadItemInfoPassThroughType> | Used to pass attributes to the root's DOM element. |

### FileUploadItemName

> **API/props table for `FileUploadItemName` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | FileUploadItemNamePassThroughType> | Used to pass attributes to the root's DOM element. |

### FileUploadItemSize

> **API/props table for `FileUploadItemSize` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | FileUploadItemSizePassThroughType> | Used to pass attributes to the root's DOM element. |

### FileUploadItemRemove

> **API/props table for `FileUploadItemRemove` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | FileUploadItemRemovePassThroughType> | Used to pass attributes to the root's DOM element. |

## Accessibility

### Screen Reader

FileUpload uses a hidden native `input[type="file"]` element for file selection. The choose button triggers this input programmatically. File thumbnails use `role="presentation"` to indicate decorative images. Error messages are rendered as visible text for screen reader announcement.

### Keyboard Support

| Key               | Function                                                                               |
| ----------------- | -------------------------------------------------------------------------------------- |
| `tab`             | Moves focus between the choose, upload, cancel buttons and file remove buttons.        |
| `enter` / `space` | Activates the focused button. Opens the file dialog when the choose button is focused. |
