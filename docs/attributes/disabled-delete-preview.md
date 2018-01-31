
# Attribute `disabledDeletePreview`

Base info current attribute 

| attribute             | default                | type            |
| -----------           | --------------------   |---------------- |
| disabledDeletePreview | false                  | boolean         |

## Description
This attribute is responsible for delete previews item. By default delete preview is enabled.

## How to use
```js
    $('your_selector').mrUploadFileButton({
      'disabledDeletePreview': true // disabled delete preview
    });

```

Or use html data-attributes

```html 
    <input type="file"
                       id="demo1"
                       data-mr-upload-file-button="true"
                       data-disabled-delete-preview="true"
                       multiple />
```


## Demo
[link to demo]()

## License

**mr-upload-file-button** is released under the BSD 3-Clause License. See the bundled [`LICENSE.md`](LICENSE.md) for details.
