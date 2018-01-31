
# Attribute `disabledDragArea`

Base info current attribute 

| attribute             | default                | type            |
| -----------           | --------------------   |---------------- |
| disabledDragArea      | false                  | boolean         |

## Description
This attribute is responsible for displaying drag and drop area . By default drag and drop area is enabled.

## How to use
```js
    $('your_selector').mrUploadFileButton({
      'disabledDragArea': true // disabled delete preview
    });

```

Or use html data-attributes

```html 
    <input type="file"
                       id="demo1"
                       data-mr-upload-file-button="true"
                       data-disabled-drag-area="true"
                       multiple />
```


## Demo
[link to demo]()

## License

**mr-upload-file-button** is released under the BSD 3-Clause License. See the bundled [`LICENSE.md`](LICENSE.md) for details.
