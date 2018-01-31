
# Attribute `disabledGallery`

Base info current attribute 

| attribute             | default                | type            |
| -----------           | --------------------   |---------------- |
| disabledGallery       | false                  | boolean         |

## Description
This attribute is responsible for displaying gallery preview item. By default gallery preview item is enabled.

## How to use
```js
    $('your_selector').mrUploadFileButton({
      'disabledGallery': true // disabled gallery preview item
    });

```

Or use html data-attributes

```html 
    <input type="file"
                       id="demo1"
                       data-mr-upload-file-button="true"
                       data-disabled-gallery="true"
                       multiple />
```


## Demo
[link to demo]()

## License

**mr-upload-file-button** is released under the BSD 3-Clause License. See the bundled [`LICENSE.md`](LICENSE.md) for details.
