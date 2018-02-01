
# Attribute `uploadUrl`

Base info current attribute 

| attribute          | default              | type            |
| -----------        | -------------------- |---------------- |
| uploadUrl          |                      | string          |

## Description

This attribute is intended to url upload. 

## How to use
```js
    $('your_selector').mrUploadFileButton({
      'uploadUrl': 'http://exmaple.com/ajax-upload-files/' // add custom css class
    });
```

Or use html data-attributes

```html 
    <input type="file"
                       id="demo1"
                       data-mr-upload-file-button="true"
                       data-upload-url="http://exmaple.com/ajax-upload-files/"
                       multiple />
```


## Demo
[link to demo]()

## License

**mr-upload-file-button** is released under the BSD 3-Clause License. See the bundled [`LICENSE.md`](LICENSE.md) for details.
