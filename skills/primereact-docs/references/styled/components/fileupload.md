# FileUpload

FileUpload is an advanced uploader with dragdrop support, multi file uploads, auto uploading, progress tracking and validations.

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

### Auto

When _auto_ property is enabled, a file gets uploaded instantly after selection.

### Advanced

Advanced uploader provides dragdrop support, multi file uploads, auto uploading, progress tracking and validations.

### InputGroup

File upload functionality can be integrated within an InputGroup for inline file selection.

### Custom Upload

Uploading implementation can be overridden by enabling _customUpload_ property. This sample, displays the image on the client side with a grayscale filter.

### Dropzone

A drag-and-drop zone for file uploads with file listing. Uses _FileUpload.Content_ as a drop target with _FileUpload.ItemGroup_ and _FileUpload.Item_ for composable file display.

### Image Preview

Grid-based image preview with thumbnails using _FileUpload.ItemPreview_. Hover over images to reveal the remove button.

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
