# FileUpload

FileUpload is an advanced uploader with dragdrop support, multi file uploads, auto uploading, progress tracking and validations.

```tsx
'use client';
import { CloudUpload } from '@primeicons/react/cloud-upload';
import { File as FileIcon } from '@primeicons/react/file';
import { Times } from '@primeicons/react/times';
import { Button } from '@primereact/ui/button';
import { FileUpload, type FileUploadRootInstance } from '@primereact/ui/fileupload';
import { ProgressBar } from '@primereact/ui/progressbar';

export default function Preview() {
    return (
        <FileUpload.Root name="demo[]" url="/api/upload" multiple maxFileSize={5 * 1024 * 1024} className="max-w-sm mx-auto">
            {(instance: FileUploadRootInstance) => {
                const { state, hasFiles, hasUploadedFiles } = instance;

                return (
                    <>
                        <FileUpload.Content className="border! border-dashed! border-surface! rounded-md! bg-surface-50! dark:bg-surface-900! hover:bg-surface-100! dark:hover:bg-surface-800! transition-colors!">
                            <FileUpload.Trigger as="div" className="flex flex-col items-center gap-2 p-6 cursor-pointer">
                                <CloudUpload className="size-7! opacity-40" />
                                <div className="text-sm font-medium">Drop files or click to browse</div>
                                <div className="text-xs text-muted-color">Up to 5 MB each</div>
                            </FileUpload.Trigger>
                        </FileUpload.Content>

                        {(hasFiles || hasUploadedFiles) && (
                            <FileUpload.ItemGroup className="flex flex-col gap-2 mt-3">
                                {state.uploadedFiles.map((file, i) => (
                                    <FileUpload.Item key={'u-' + file.name + i} file={file} index={i}>
                                        <FileIcon className="text-primary shrink-0" />
                                        <FileUpload.ItemInfo className="flex-1 min-w-0">
                                            <FileUpload.ItemName className="text-sm truncate" />
                                            <div className="flex items-center gap-1 text-xs">
                                                <FileUpload.ItemSize className="text-muted-color tabular-nums" />
                                                <span className="text-muted-color">·</span>
                                                <span className="text-emerald-500">Completed</span>
                                            </div>
                                        </FileUpload.ItemInfo>
                                        <FileUpload.ItemRemove as={Button} iconOnly variant="text" severity="secondary" size="small" rounded>
                                            <Times />
                                        </FileUpload.ItemRemove>
                                    </FileUpload.Item>
                                ))}
                                {state.files.map((file, i) => (
                                    <FileUpload.Item key={file.name + i} file={file} index={i}>
                                        <FileIcon className="text-primary shrink-0" />
                                        <FileUpload.ItemInfo className="flex-1 min-w-0">
                                            <FileUpload.ItemName className="text-sm truncate" />
                                            <div className="flex items-center gap-1 text-xs">
                                                <FileUpload.ItemSize className="text-muted-color tabular-nums" />
                                                <span className="text-muted-color">·</span>
                                                <span className="text-primary">
                                                    {state.progress > 0 ? `Uploading ${state.progress}%` : 'Pending'}
                                                </span>
                                            </div>
                                            {state.progress > 0 && (
                                                <ProgressBar.Root value={state.progress} className="mt-1.5">
                                                    <ProgressBar.Track style={{ height: '0.2rem' }}>
                                                        <ProgressBar.Indicator />
                                                    </ProgressBar.Track>
                                                </ProgressBar.Root>
                                            )}
                                        </FileUpload.ItemInfo>
                                        <FileUpload.ItemRemove as={Button} iconOnly variant="text" severity="secondary" size="small" rounded>
                                            <Times />
                                        </FileUpload.ItemRemove>
                                    </FileUpload.Item>
                                ))}
                            </FileUpload.ItemGroup>
                        )}

                        {hasFiles && (
                            <FileUpload.Upload as={Button} className="w-full mt-3">
                                Upload {state.files.length} {state.files.length === 1 ? 'file' : 'files'}
                            </FileUpload.Upload>
                        )}
                    </>
                );
            }}
        </FileUpload.Root>
    );
}

```

## Usage

```tsx
import { FileUpload } from '@primereact/ui/fileupload';
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

## Examples

### Basic

Select and upload files with drag-and-drop support.

```tsx
'use client';
import { Plus } from '@primeicons/react/plus';
import { Times } from '@primeicons/react/times';
import { toast } from '@primereact/headless/toaster';
import type { FileUploadChangeEvent } from '@primereact/ui/fileupload';
import { Button } from '@primereact/ui/button';
import { FileUpload, FileUploadRootInstance } from '@primereact/ui/fileupload';
import { Message } from '@primereact/ui/message';
import { Toast } from '@primereact/ui/toast';
import { Toaster } from '@primereact/ui/toaster';
import { ToasterRegionInstance, ToastType } from 'primereact/toaster';
import * as React from 'react';

export default function BasicDemo() {
    const [messages, setMessages] = React.useState<string[]>([]);

    const onUpload = () => {
        toast({
            title: 'Success',
            description: 'File Uploaded',
            group: 'basic-demo'
        });
    };

    return (
        <div>
            <FileUpload.Root
                name="demo[]"
                url="/api/upload"
                accept="image/*"
                multiple
                maxFileSize={1000000}
                onUpload={onUpload}
                onChange={(event: FileUploadChangeEvent) => setMessages(event.rejectedFiles.flatMap((r) => r.errors.map((e) => e.message)))}
            >
                {(instance: FileUploadRootInstance) => {
                    const { state, hasFiles } = instance;

                    return (
                        <>
                            {messages.length > 0 &&
                                messages.map((msg, i) => (
                                    <Message.Root key={i} severity="error" className="mb-2">
                                        <Message.Content>
                                            <Message.Text>{msg}</Message.Text>
                                        </Message.Content>
                                    </Message.Root>
                                ))}

                            <div className="flex justify-between">
                                <div className="flex flex-wrap items-center gap-3">
                                    <FileUpload.Trigger as={Button}>
                                        <Plus />
                                        Choose
                                    </FileUpload.Trigger>
                                    <span>{hasFiles ? state.files.map((file) => file.name).join(', ') : 'No file chosen'}</span>
                                </div>
                                <FileUpload.Upload as={Button} severity="secondary">
                                    Upload
                                </FileUpload.Upload>
                            </div>
                        </>
                    );
                }}
            </FileUpload.Root>

            <Toaster.Root position="top-right" group="basic-demo">
                <Toaster.Portal>
                    <Toaster.Region>
                        {({ toaster }: ToasterRegionInstance) =>
                            toaster?.toasts.map((toast: ToastType) => (
                                <Toast.Root key={toast.id} toast={toast}>
                                    <Toast.Content>
                                        <Toast.Icon />
                                        <Toast.Message>
                                            <Toast.Title />
                                            <Toast.Description />
                                            <Toast.Action as={Button} size="small" className="mt-3" />
                                        </Toast.Message>
                                        <Toast.Close>
                                            <Times />
                                        </Toast.Close>
                                    </Toast.Content>
                                </Toast.Root>
                            ))
                        }
                    </Toaster.Region>
                </Toaster.Portal>
            </Toaster.Root>
        </div>
    );
}

```

### Auto

When _auto_ property is enabled, a file gets uploaded instantly after selection.

```tsx
'use client';
import { Plus } from '@primeicons/react/plus';
import { Times } from '@primeicons/react/times';
import { toast } from '@primereact/headless/toaster';
import type { FileUploadChangeEvent } from '@primereact/ui/fileupload';
import { Button } from '@primereact/ui/button';
import { FileUpload } from '@primereact/ui/fileupload';
import { Message } from '@primereact/ui/message';
import { Toast } from '@primereact/ui/toast';
import { Toaster } from '@primereact/ui/toaster';
import { ToasterRegionInstance, ToastType } from 'primereact/toaster';
import * as React from 'react';

export default function AutoDemo() {
    const [messages, setMessages] = React.useState<string[]>([]);

    const onUpload = () => {
        toast({
            title: 'Success',
            description: 'File Uploaded',
            group: 'auto-demo'
        });
    };

    return (
        <div className="flex justify-center">
            <FileUpload.Root
                name="demo[]"
                url="/api/upload"
                auto
                accept="image/*"
                maxFileSize={1000000}
                onUpload={onUpload}
                onChange={(event: FileUploadChangeEvent) => setMessages(event.rejectedFiles.flatMap((r) => r.errors.map((e) => e.message)))}
            >
                {messages.length > 0 &&
                    messages.map((msg, i) => (
                        <Message.Root key={i} severity="error" className="mb-2">
                            <Message.Content>
                                <Message.Text>{msg}</Message.Text>
                            </Message.Content>
                        </Message.Root>
                    ))}

                <div className="flex flex-wrap items-center gap-3">
                    <FileUpload.Trigger as={Button}>
                        <Plus />
                        Browse
                    </FileUpload.Trigger>
                </div>
            </FileUpload.Root>

            <Toaster.Root position="top-right" group="auto-demo">
                <Toaster.Portal>
                    <Toaster.Region>
                        {({ toaster }: ToasterRegionInstance) =>
                            toaster?.toasts.map((toast: ToastType) => (
                                <Toast.Root key={toast.id} toast={toast}>
                                    <Toast.Content>
                                        <Toast.Icon />
                                        <Toast.Message>
                                            <Toast.Title />
                                            <Toast.Description />
                                            <Toast.Action as={Button} size="small" className="mt-3" />
                                        </Toast.Message>
                                        <Toast.Close>
                                            <Times />
                                        </Toast.Close>
                                    </Toast.Content>
                                </Toast.Root>
                            ))
                        }
                    </Toaster.Region>
                </Toaster.Portal>
            </Toaster.Root>
        </div>
    );
}

```

### Advanced

Advanced uploader provides dragdrop support, multi file uploads, auto uploading, progress tracking and validations.

```tsx
'use client';
import { Plus } from '@primeicons/react/plus';
import { Times } from '@primeicons/react/times';
import { Upload } from '@primeicons/react/upload';
import { toast } from '@primereact/headless/toaster';
import type { FileUploadChangeEvent } from '@primereact/ui/fileupload';
import { Button } from '@primereact/ui/button';
import { FileUpload, FileUploadRootInstance } from '@primereact/ui/fileupload';
import { Message } from '@primereact/ui/message';
import { ProgressBar } from '@primereact/ui/progressbar';
import { Toast } from '@primereact/ui/toast';
import { Toaster } from '@primereact/ui/toaster';
import { ToasterRegionInstance, ToastType } from 'primereact/toaster';
import * as React from 'react';

export default function AdvancedDemo() {
    const [messages, setMessages] = React.useState<string[]>([]);

    const onUpload = () => {
        toast({
            title: 'Success',
            description: 'File Uploaded',
            group: 'advanced-demo'
        });
    };

    return (
        <div>
            <FileUpload.Root
                name="demo[]"
                url="/api/upload"
                multiple
                accept="image/*"
                maxFileSize={1000000}
                className="border! border-surface-200! dark:border-surface-700! rounded-md!"
                onUpload={onUpload}
                onChange={(event: FileUploadChangeEvent) => console.log(event)}
            >
                {(instance: FileUploadRootInstance) => {
                    const { state, hasFiles, hasUploadedFiles } = instance;

                    return (
                        <>
                            <div className="flex items-center p-5 gap-2">
                                <FileUpload.Trigger as={Button}>
                                    <Plus />
                                    Choose
                                </FileUpload.Trigger>
                                <FileUpload.Upload as={Button} severity="secondary">
                                    <Upload />
                                    Upload
                                </FileUpload.Upload>
                                <FileUpload.Clear as={Button} severity="secondary">
                                    <Times />
                                    Cancel
                                </FileUpload.Clear>
                            </div>

                            <FileUpload.Content>
                                {(messages.length > 0 || hasFiles) && (
                                    <div className="flex flex-col gap-4">
                                        {messages.length > 0 &&
                                            messages.map((msg, i) => (
                                                <Message.Root key={i} severity="error" className="mb-2">
                                                    <Message.Content>
                                                        <Message.Text>{msg}</Message.Text>
                                                    </Message.Content>
                                                </Message.Root>
                                            ))}

                                        {hasFiles && (
                                            <ProgressBar.Root value={state.progress}>
                                                <ProgressBar.Track style={{ height: '0.25rem' }}>
                                                    <ProgressBar.Indicator>
                                                        <ProgressBar.Label />
                                                    </ProgressBar.Indicator>
                                                </ProgressBar.Track>
                                            </ProgressBar.Root>
                                        )}
                                    </div>
                                )}

                                {hasFiles && (
                                    <FileUpload.ItemGroup>
                                        {state.files.map((file, index) => (
                                            <FileUpload.Item key={file.name + file.type + file.size} file={file} index={index}>
                                                <FileUpload.ItemPreview />
                                                <FileUpload.ItemInfo>
                                                    <FileUpload.ItemName />
                                                    <FileUpload.ItemSize />
                                                </FileUpload.ItemInfo>
                                                <FileUpload.ItemRemove className="ml-auto">
                                                    <Times aria-hidden="true" />
                                                </FileUpload.ItemRemove>
                                            </FileUpload.Item>
                                        ))}
                                    </FileUpload.ItemGroup>
                                )}

                                {hasUploadedFiles && (
                                    <FileUpload.ItemGroup>
                                        {state.uploadedFiles.map((file, index) => (
                                            <FileUpload.Item key={file.name + file.type + file.size} file={file} index={index}>
                                                <FileUpload.ItemPreview />
                                                <FileUpload.ItemInfo>
                                                    <FileUpload.ItemName />
                                                    <FileUpload.ItemSize />
                                                </FileUpload.ItemInfo>
                                                <FileUpload.ItemRemove className="ml-auto">
                                                    <Times aria-hidden="true" />
                                                </FileUpload.ItemRemove>
                                            </FileUpload.Item>
                                        ))}
                                    </FileUpload.ItemGroup>
                                )}

                                {!hasFiles && !hasUploadedFiles && <div>Drag and drop files to here to upload.</div>}
                            </FileUpload.Content>
                        </>
                    );
                }}
            </FileUpload.Root>

            <Toaster.Root position="top-right" group="advanced-demo">
                <Toaster.Portal>
                    <Toaster.Region>
                        {({ toaster }: ToasterRegionInstance) =>
                            toaster?.toasts.map((toast: ToastType) => (
                                <Toast.Root key={toast.id} toast={toast}>
                                    <Toast.Content>
                                        <Toast.Icon />
                                        <Toast.Message>
                                            <Toast.Title />
                                            <Toast.Description />
                                            <Toast.Action as={Button} size="small" className="mt-3" />
                                        </Toast.Message>
                                        <Toast.Close>
                                            <Times />
                                        </Toast.Close>
                                    </Toast.Content>
                                </Toast.Root>
                            ))
                        }
                    </Toaster.Region>
                </Toaster.Portal>
            </Toaster.Root>
        </div>
    );
}

```

### InputGroup

File upload functionality can be integrated within an InputGroup for inline file selection.

```tsx
'use client';
import { Tag as TagIcon } from '@primeicons/react';
import { CloudUpload } from '@primeicons/react/cloud-upload';
import { Upload } from '@primeicons/react/upload';
import { Button } from '@primereact/ui/button';
import { FileUpload, FileUploadRootInstance } from '@primereact/ui/fileupload';
import { InputGroup } from '@primereact/ui/inputgroup';
import { InputText } from '@primereact/ui/inputtext';

export default function InputGroupDemo() {
    return (
        <div className="space-y-4 max-w-md mx-auto">
            <InputGroup.Root>
                <InputGroup.Addon>Upload</InputGroup.Addon>

                <InputGroup.Addon>
                    <FileUpload.Root name="demo1[]" accept="image/*" maxFileSize={1000000}>
                        {(instance: FileUploadRootInstance) => {
                            const { state, hasFiles } = instance;

                            return (
                                <FileUpload.Trigger as={Button} severity="secondary" variant="outlined" className="border-none!">
                                    <Upload className="mr-2" />
                                    {hasFiles ? state.files.map((file) => file.name).join(', ') : 'Choose file'}
                                </FileUpload.Trigger>
                            );
                        }}
                    </FileUpload.Root>
                </InputGroup.Addon>
            </InputGroup.Root>

            <InputGroup.Root>
                <InputGroup.Addon>
                    <FileUpload.Root name="demo2[]" accept="image/*" maxFileSize={1000000}>
                        {(instance: FileUploadRootInstance) => {
                            const { state, hasFiles } = instance;

                            return (
                                <FileUpload.Trigger as={Button} severity="secondary" variant="outlined" className="border-none!">
                                    <Upload className="mr-2" />
                                    {hasFiles ? state.files.map((file) => file.name).join(', ') : 'Choose file'}
                                </FileUpload.Trigger>
                            );
                        }}
                    </FileUpload.Root>
                </InputGroup.Addon>
                <InputGroup.Addon>
                    <Button severity="secondary" variant="text" iconOnly>
                        <CloudUpload />
                    </Button>
                </InputGroup.Addon>
            </InputGroup.Root>

            <InputGroup.Root>
                <InputGroup.Addon>
                    <TagIcon />
                </InputGroup.Addon>
                <InputText placeholder="Label" />
                <InputGroup.Addon>
                    <FileUpload.Root name="demo3[]" accept="image/*" maxFileSize={1000000}>
                        {(instance: FileUploadRootInstance) => {
                            const { state, hasFiles } = instance;

                            return (
                                <FileUpload.Trigger as={Button} severity="secondary" variant="outlined" className="border-none!">
                                    <Upload className="mr-2" />
                                    {hasFiles ? state.files.map((file) => file.name).join(', ') : 'Browse'}
                                </FileUpload.Trigger>
                            );
                        }}
                    </FileUpload.Root>
                </InputGroup.Addon>
            </InputGroup.Root>
        </div>
    );
}

```

### Custom Upload

Uploading implementation can be overridden by enabling _customUpload_ property. This sample, displays the image on the client side with a grayscale filter.

```tsx
'use client';
import { Plus } from '@primeicons/react/plus';
import type { FileUploadHandlerEvent } from '@primereact/ui/fileupload';
import { Button } from '@primereact/ui/button';
import { FileUpload } from '@primereact/ui/fileupload';
import * as React from 'react';

export default function CustomUploadDemo() {
    const [src, setSrc] = React.useState<string | null>(null);

    const onFileSelect = (event: FileUploadHandlerEvent) => {
        const file = event.files[0];
        const reader = new FileReader();

        reader.onload = async (e) => {
            if (e.target?.result && typeof e.target.result === 'string') {
                setSrc(e.target.result);
            }
        };

        reader.readAsDataURL(file);
    };

    return (
        <div className="flex flex-col items-center gap-6">
            <FileUpload.Root url="/api/upload" auto customUpload uploadHandler={onFileSelect}>
                <div className="flex flex-wrap items-center gap-3">
                    <FileUpload.Trigger as={Button} severity="secondary" variant="outlined">
                        <Plus />
                        Browse
                    </FileUpload.Trigger>
                </div>
            </FileUpload.Root>
            {src && <img src={src} alt="Image" className="shadow-md rounded-xl w-full sm:w-64" style={{ filter: 'grayscale(100%)' }} />}
        </div>
    );
}

```

### Dropzone

A drag-and-drop zone for file uploads with file listing. Uses _FileUpload.Content_ as a drop target with _FileUpload.ItemGroup_ and _FileUpload.Item_ for composable file display.

```tsx
'use client';
import { CloudUpload } from '@primeicons/react/cloud-upload';
import { Times } from '@primeicons/react/times';
import { Button } from '@primereact/ui/button';
import { FileUpload, type FileUploadRootInstance } from '@primereact/ui/fileupload';

export default function DropzoneDemo() {
    return (
        <FileUpload.Root name="demo[]" url="/api/upload" multiple accept="image/*" maxFileSize={1000000}>
            {(instance: FileUploadRootInstance) => {
                const { state, hasFiles } = instance;

                return (
                    <FileUpload.Content className="border! border-dashed! border-surface-200! dark:border-surface-700! rounded-lg p-4! transition-colors">
                        {hasFiles ? (
                            <div className="flex flex-col gap-4">
                                <div className="flex items-start justify-between">
                                    <span className="text-sm text-muted-color">{state.files.length} file(s) selected</span>
                                    <div className="flex items-center gap-2">
                                        <FileUpload.Upload as={Button} variant="text">
                                            Upload
                                        </FileUpload.Upload>
                                        <FileUpload.Clear as={Button} severity="danger" variant="text">
                                            Clear all
                                        </FileUpload.Clear>
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
                                            <FileUpload.ItemRemove className="text-muted-color hover:text-red-500 cursor-pointer">
                                                <Times />
                                            </FileUpload.ItemRemove>
                                        </FileUpload.Item>
                                    ))}
                                </FileUpload.ItemGroup>
                            </div>
                        ) : (
                            <FileUpload.Trigger as="div" className="flex flex-col items-center justify-center gap-3 py-8 cursor-pointer">
                                <CloudUpload className="w-12! h-12! text-muted-color" />
                                <div className="text-center">
                                    <p className="text-lg font-medium mt-0 mb-1">Drop files here</p>
                                    <p className="text-sm text-muted-color m-0">or click to browse</p>
                                </div>
                            </FileUpload.Trigger>
                        )}
                    </FileUpload.Content>
                );
            }}
        </FileUpload.Root>
    );
}

```

### Image Preview

Grid-based image preview with thumbnails using _FileUpload.ItemPreview_. Hover over images to reveal the remove button.

```tsx
'use client';
import { Plus } from '@primeicons/react/plus';
import { Times } from '@primeicons/react/times';
import { Upload } from '@primeicons/react/upload';
import { Button } from '@primereact/ui/button';
import { FileUpload, type FileUploadRootInstance } from '@primereact/ui/fileupload';

export default function ImagePreviewDemo() {
    return (
        <FileUpload.Root name="demo[]" url="/api/upload" multiple accept="image/*" maxFileSize={1000000}>
            {(instance: FileUploadRootInstance) => {
                const { state, hasFiles } = instance;

                return (
                    <>
                        <div className="flex items-center gap-2">
                            <FileUpload.Trigger as={Button} severity="secondary" variant="outlined">
                                <Plus />
                                Add Images
                            </FileUpload.Trigger>
                            {hasFiles && (
                                <FileUpload.Upload as={Button}>
                                    <Upload />
                                    Upload All
                                </FileUpload.Upload>
                            )}
                        </div>

                        {hasFiles && (
                            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                {state.files.map((file, index) => (
                                    <FileUpload.Item
                                        key={file.name + file.size}
                                        file={file}
                                        index={index}
                                        className="group relative overflow-hidden rounded-lg border! border-surface-200! dark:border-surface-700!"
                                    >
                                        <FileUpload.ItemPreview className="w-full h-32 object-cover" />
                                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                            <FileUpload.ItemRemove as={Button} severity="danger" iconOnly size="small" rounded>
                                                <Times />
                                            </FileUpload.ItemRemove>
                                        </div>
                                        <FileUpload.ItemInfo className="p-2 w-full overflow-hidden">
                                            <FileUpload.ItemName className="text-xs font-medium truncate w-full" />
                                            <FileUpload.ItemSize className="text-xs text-muted-color" />
                                        </FileUpload.ItemInfo>
                                    </FileUpload.Item>
                                ))}
                            </div>
                        )}

                        {!hasFiles && (
                            <div className="mt-4 border border-dashed border-surface-200 dark:border-surface-700 rounded-lg p-12 text-center">
                                <p className="text-muted-color m-0">No images selected. Click &quot;Add Images&quot; to get started.</p>
                            </div>
                        )}
                    </>
                );
            }}
        </FileUpload.Root>
    );
}

```

## Related

### Sub-Components

See [Primitive API](../../primitive/components/fileupload.md#api) for `FileUploadRoot`, `FileUploadContent`, `FileUploadItemGroup`, `FileUploadItem`, `FileUploadItemPreview`, `FileUploadItemInfo`, `FileUploadItemName`, `FileUploadItemSize`, `FileUploadItemRemove` component documentation.

### Hooks

See [Headless API](../../headless/components/fileupload.md#api) for `useFileUpload` hook documentation.

### Accessibility

See [FileUpload Primitive](../../primitive/components/fileupload.md#accessibility) for WAI-ARIA compliance details and keyboard support.

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-fileupload | Class name of the root element |
| p-fileupload-content | Class name of the content element |
| p-fileupload-file-list | Class name of the file list element |
| p-fileupload-file | Class name of the file element |
| p-fileupload-file-thumbnail | Class name of the file thumbnail element |
| p-fileupload-file-info | Class name of the file info element |
| p-fileupload-file-name | Class name of the file name element |
| p-fileupload-file-size | Class name of the file size element |
| p-fileupload-file-actions | Class name of the file actions element |
| p-fileupload-file-remove | Class name of the file remove element |

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| fileupload.background | --p-fileupload-background | Background of root |
| fileupload.border.color | --p-fileupload-border-color | Border color of root |
| fileupload.color | --p-fileupload-color | Color of root |
| fileupload.border.radius | --p-fileupload-border-radius | Border radius of root |
| fileupload.transition.duration | --p-fileupload-transition-duration | Transition duration of root |
| fileupload.header.background | --p-fileupload-header-background | Background of header |
| fileupload.header.color | --p-fileupload-header-color | Color of header |
| fileupload.header.padding | --p-fileupload-header-padding | Padding of header |
| fileupload.header.border.color | --p-fileupload-header-border-color | Border color of header |
| fileupload.header.border.width | --p-fileupload-header-border-width | Border width of header |
| fileupload.header.border.radius | --p-fileupload-header-border-radius | Border radius of header |
| fileupload.header.gap | --p-fileupload-header-gap | Gap of header |
| fileupload.content.highlight.border.color | --p-fileupload-content-highlight-border-color | Highlight border color of content |
| fileupload.content.padding | --p-fileupload-content-padding | Padding of content |
| fileupload.content.gap | --p-fileupload-content-gap | Gap of content |
| fileupload.file.padding | --p-fileupload-file-padding | Padding of file |
| fileupload.file.gap | --p-fileupload-file-gap | Gap of file |
| fileupload.file.border.color | --p-fileupload-file-border-color | Border color of file |
| fileupload.file.info.gap | --p-fileupload-file-info-gap | Info gap of file |
| fileupload.file.name.color | --p-fileupload-file-name-color | Color of file name |
| fileupload.file.name.font.weight | --p-fileupload-file-name-font-weight | Font weight of file name |
| fileupload.file.name.font.size | --p-fileupload-file-name-font-size | Font size of file name |
| fileupload.file.size.color | --p-fileupload-file-size-color | Color of file size |
| fileupload.file.size.font.weight | --p-fileupload-file-size-font-weight | Font weight of file size |
| fileupload.file.size.font.size | --p-fileupload-file-size-font-size | Font size of file size |
| fileupload.file.list.gap | --p-fileupload-file-list-gap | Gap of file list |
| fileupload.progressbar.height | --p-fileupload-progressbar-height | Height of progressbar |
| fileupload.basic.gap | --p-fileupload-basic-gap | Gap of basic |
