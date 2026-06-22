# FileUpload

FileUpload is an advanced uploader with dragdrop support, multi file uploads, auto uploading, progress tracking and validations.

```tsx
'use client';
import { Plus } from '@primeicons/react/plus';
import { Times } from '@primeicons/react/times';
import { toast } from '@primereact/headless/toaster';
import { Button } from '@primereact/ui/button';
import { FileUpload, FileUploadRootInstance } from '@primereact/ui/fileupload';
import { Message } from '@primereact/ui/message';
import { Toast } from '@primereact/ui/toast';
import { Toaster } from '@primereact/ui/toaster';
import { ToasterRegionInstance, ToastType } from 'primereact/toaster';

export default function Preview() {
    const onUpload = () => {
        toast({
            title: 'Success',
            description: 'File Uploaded',
            group: 'basic-demo'
        });
    };

    return (
        <div>
            <FileUpload.Root name="demo[]" url="/api/upload" accept="image/*" multiple maxFileSize={1000000} onUpload={onUpload}>
                {(instance: FileUploadRootInstance) => {
                    const { state, hasFiles, choose, upload } = instance;

                    return (
                        <>
                            {state.messages &&
                                state.messages.length > 0 &&
                                state.messages.map((msg, i) => (
                                    <Message.Root key={i} severity="error" className="mb-2">
                                        <Message.Content>
                                            <Message.Text>{msg}</Message.Text>
                                        </Message.Content>
                                    </Message.Root>
                                ))}

                            <div className="flex justify-between">
                                <div className="flex flex-wrap items-center gap-3">
                                    <Button onClick={choose}>
                                        <Plus />
                                        Choose
                                    </Button>
                                    <span>{hasFiles ? state.files.map((file) => file.name).join(', ') : 'No file chosen'}</span>
                                </div>
                                <Button severity="secondary" onClick={upload}>
                                    Upload
                                </Button>
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
                                    <div className="grid grid-cols-[auto_1fr] items-start gap-3">
                                        <Toast.Icon className="[&>svg]:size-3.5 mt-1 " />
                                        <div>
                                            <Toast.Title />
                                            <Toast.Description className="mt-1" />
                                            <Toast.Action as={Button} size="small" className="mt-3" />
                                        </div>
                                    </div>
                                    <Toast.Close
                                        as={Button}
                                        iconOnly
                                        severity={'secondary'}
                                        variant="text"
                                        size="small"
                                        className={'absolute top-2 right-2'}
                                    >
                                        <Times />
                                    </Toast.Close>
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
import { Button } from '@primereact/ui/button';
import { FileUpload, FileUploadRootInstance } from '@primereact/ui/fileupload';
import { Message } from '@primereact/ui/message';
import { Toast } from '@primereact/ui/toast';
import { Toaster } from '@primereact/ui/toaster';
import { ToasterRegionInstance, ToastType } from 'primereact/toaster';

export default function BasicDemo() {
    const onUpload = () => {
        toast({
            title: 'Success',
            description: 'File Uploaded',
            group: 'basic-demo'
        });
    };

    return (
        <div>
            <FileUpload.Root name="demo[]" url="/api/upload" accept="image/*" multiple maxFileSize={1000000} onUpload={onUpload}>
                {(instance: FileUploadRootInstance) => {
                    const { state, hasFiles, choose, upload } = instance;

                    return (
                        <>
                            {state.messages &&
                                state.messages.length > 0 &&
                                state.messages.map((msg, i) => (
                                    <Message.Root key={i} severity="error" className="mb-2">
                                        <Message.Content>
                                            <Message.Text>{msg}</Message.Text>
                                        </Message.Content>
                                    </Message.Root>
                                ))}

                            <div className="flex justify-between">
                                <div className="flex flex-wrap items-center gap-3">
                                    <Button onClick={choose}>
                                        <Plus />
                                        Choose
                                    </Button>
                                    <span>{hasFiles ? state.files.map((file) => file.name).join(', ') : 'No file chosen'}</span>
                                </div>
                                <Button severity="secondary" onClick={upload}>
                                    Upload
                                </Button>
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
                                    <div className="grid grid-cols-[auto_1fr] items-start gap-3">
                                        <Toast.Icon className="[&>svg]:size-3.5 mt-1 " />
                                        <div>
                                            <Toast.Title />
                                            <Toast.Description className="mt-1" />
                                            <Toast.Action as={Button} size="small" className="mt-3" />
                                        </div>
                                    </div>
                                    <Toast.Close
                                        as={Button}
                                        iconOnly
                                        severity={'secondary'}
                                        variant="text"
                                        size="small"
                                        className={'absolute top-2 right-2'}
                                    >
                                        <Times />
                                    </Toast.Close>
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
import { Button } from '@primereact/ui/button';
import { FileUpload, FileUploadRootInstance } from '@primereact/ui/fileupload';
import { Message } from '@primereact/ui/message';
import { Toast } from '@primereact/ui/toast';
import { Toaster } from '@primereact/ui/toaster';
import { ToasterRegionInstance, ToastType } from 'primereact/toaster';

export default function AutoDemo() {
    const onUpload = () => {
        toast({
            title: 'Success',
            description: 'File Uploaded',
            group: 'auto-demo'
        });
    };

    return (
        <div className="flex justify-center">
            <FileUpload.Root name="demo[]" url="/api/upload" auto accept="image/*" maxFileSize={1000000} onUpload={onUpload}>
                {(instance: FileUploadRootInstance) => {
                    const { state, choose } = instance;

                    return (
                        <>
                            {state.messages &&
                                state.messages.length > 0 &&
                                state.messages.map((msg, i) => (
                                    <Message.Root key={i} severity="error" className="mb-2">
                                        <Message.Content>
                                            <Message.Text>{msg}</Message.Text>
                                        </Message.Content>
                                    </Message.Root>
                                ))}

                            <div className="flex flex-wrap items-center gap-3">
                                <Button onClick={choose}>
                                    <Plus />
                                    Browse
                                </Button>
                            </div>
                        </>
                    );
                }}
            </FileUpload.Root>

            <Toaster.Root position="top-right" group="auto-demo">
                <Toaster.Portal>
                    <Toaster.Region>
                        {({ toaster }: ToasterRegionInstance) =>
                            toaster?.toasts.map((toast: ToastType) => (
                                <Toast.Root key={toast.id} toast={toast}>
                                    <div className="grid grid-cols-[auto_1fr] items-start gap-3">
                                        <Toast.Icon className="[&>svg]:size-3.5 mt-1 " />
                                        <div>
                                            <Toast.Title />
                                            <Toast.Description className="mt-1" />
                                            <Toast.Action as={Button} size="small" className="mt-3" />
                                        </div>
                                    </div>
                                    <Toast.Close
                                        as={Button}
                                        iconOnly
                                        severity={'secondary'}
                                        variant="text"
                                        size="small"
                                        className={'absolute top-2 right-2'}
                                    >
                                        <Times />
                                    </Toast.Close>
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
import { Button } from '@primereact/ui/button';
import { FileUpload, FileUploadRootInstance } from '@primereact/ui/fileupload';
import { Message } from '@primereact/ui/message';
import { ProgressBar } from '@primereact/ui/progressbar';
import { Toast } from '@primereact/ui/toast';
import { Toaster } from '@primereact/ui/toaster';
import { ToasterRegionInstance, ToastType } from 'primereact/toaster';

export default function AdvancedDemo() {
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
                className="border border-surface-200 dark:border-surface-700 rounded-md"
                onUpload={onUpload}
            >
                {(instance: FileUploadRootInstance) => {
                    const { state, hasFiles, hasUploadedFiles, choose, upload, clear } = instance;

                    return (
                        <>
                            <div className="flex items-center p-5 gap-2">
                                <Button onClick={choose}>
                                    <Plus />
                                    Choose
                                </Button>
                                <Button severity="secondary" disabled={!hasFiles} onClick={upload}>
                                    <Upload />
                                    Upload
                                </Button>
                                <Button severity="secondary" disabled={!hasFiles} onClick={clear}>
                                    <Times />
                                    Cancel
                                </Button>
                            </div>

                            <FileUpload.Content>
                                {((state.messages && state.messages.length > 0) || hasFiles) && (
                                    <div className="flex flex-col gap-4">
                                        {state.messages &&
                                            state.messages.length > 0 &&
                                            state.messages.map((msg, i) => (
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

                                <FileUpload.List />

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
                                    <div className="grid grid-cols-[auto_1fr] items-start gap-3">
                                        <Toast.Icon className="[&>svg]:size-3.5 mt-1 " />
                                        <div>
                                            <Toast.Title />
                                            <Toast.Description className="mt-1" />
                                            <Toast.Action as={Button} size="small" className="mt-3" />
                                        </div>
                                    </div>
                                    <Toast.Close
                                        as={Button}
                                        iconOnly
                                        severity={'secondary'}
                                        variant="text"
                                        size="small"
                                        className={'absolute top-2 right-2'}
                                    >
                                        <Times />
                                    </Toast.Close>
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
                            const { state, hasFiles, choose } = instance;

                            return (
                                <Button severity="secondary" variant="outlined" onClick={choose} className="flex-1 justify-start border-none">
                                    <Upload className="mr-2" />
                                    {hasFiles ? state.files.map((file) => file.name).join(', ') : 'Choose file'}
                                </Button>
                            );
                        }}
                    </FileUpload.Root>
                </InputGroup.Addon>
            </InputGroup.Root>

            <InputGroup.Root>
                <InputGroup.Addon>
                    <FileUpload.Root name="demo2[]" accept="image/*" maxFileSize={1000000}>
                        {(instance: FileUploadRootInstance) => {
                            const { state, hasFiles, choose } = instance;

                            return (
                                <Button severity="secondary" variant="outlined" onClick={choose} className="flex-1 justify-start border-none">
                                    <Upload className="mr-2" />
                                    {hasFiles ? state.files.map((file) => file.name).join(', ') : 'Choose file'}
                                </Button>
                            );
                        }}
                    </FileUpload.Root>
                </InputGroup.Addon>
                <InputGroup.Addon>
                    <Button severity="secondary" variant="text">
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
                            const { state, hasFiles, choose } = instance;

                            return (
                                <Button severity="secondary" variant="outlined" onClick={choose} className="border-none">
                                    <Upload className="mr-2" />
                                    {hasFiles ? state.files.map((file) => file.name).join(', ') : 'Browse'}
                                </Button>
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
import type { FileUploadHandlerEvent } from '@primereact/types/headless/fileupload';
import { Button } from '@primereact/ui/button';
import { FileUpload, FileUploadRootInstance } from '@primereact/ui/fileupload';
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
                {(instance: FileUploadRootInstance) => {
                    const { choose } = instance;

                    return (
                        <div className="flex flex-wrap items-center gap-3">
                            <Button onClick={choose} severity="secondary" variant="outlined">
                                <Plus />
                                Browse
                            </Button>
                        </div>
                    );
                }}
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
import { FileUpload, type FileUploadRootInstance } from '@primereact/ui/fileupload';

export default function DropzoneDemo() {
    return (
        <FileUpload.Root name="demo[]" url="/api/upload" multiple accept="image/*" maxFileSize={1000000}>
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
                const { state, hasFiles, choose, upload, remove } = instance;

                return (
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                            <Button onClick={choose} severity="secondary" variant="outlined" size="small">
                                <Plus />
                                Add Images
                            </Button>
                            {hasFiles && (
                                <Button onClick={upload} size="small">
                                    <Upload />
                                    Upload All
                                </Button>
                            )}
                        </div>

                        {hasFiles && (
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                {state.files.map((file, index) => (
                                    <FileUpload.Item
                                        key={file.name + file.size}
                                        file={file}
                                        index={index}
                                        className="group relative rounded-lg overflow-hidden border border-surface-200 dark:border-surface-700"
                                    >
                                        <FileUpload.ItemPreview className="w-full h-32 object-cover" />
                                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                            <FileUpload.Remove
                                                onClick={() => remove(index)}
                                                className="text-white bg-red-500 rounded-full p-2 hover:bg-red-600 cursor-pointer"
                                            >
                                                <Times />
                                            </FileUpload.Remove>
                                        </div>
                                        <FileUpload.ItemInfo className="p-2">
                                            <FileUpload.ItemName className="text-xs font-medium truncate" />
                                            <FileUpload.ItemSize className="text-xs text-muted-color" />
                                        </FileUpload.ItemInfo>
                                    </FileUpload.Item>
                                ))}
                            </div>
                        )}

                        {!hasFiles && (
                            <div className="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded-xl p-12 text-center">
                                <p className="text-muted-color m-0">No images selected. Click &quot;Add Images&quot; to get started.</p>
                            </div>
                        )}
                    </div>
                );
            }}
        </FileUpload.Root>
    );
}
```

## API

### Sub-Components

See [Primitive API](../../primitive/fileupload/features.md#api) for `FileUploadRoot`, `FileUploadContent`, `FileUploadList`, `FileUploadItemGroup`, `FileUploadItem`, `FileUploadItemPreview`, `FileUploadItemInfo`, `FileUploadItemName`, `FileUploadItemSize`, `FileUploadRemove` component documentation.

### Hooks

See [Headless API](../../headless/fileupload/features.md#api) for `useFileUpload` hook documentation.

## Accessibility

See [FileUpload Primitive](../../primitive/fileupload/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
