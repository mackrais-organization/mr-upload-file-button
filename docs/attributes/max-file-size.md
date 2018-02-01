# Attribute `maxFileSize`

Base info current attribute 

| attribute     | default              | type           | unit       |
| -----------   | -------------------- |----------------|------------|
| maxFileSize   | 1024                 | integer \ float  | megabytes  |

## Description
This attribute is intended to specify the limit of the uploaded file

## How to use
```js
    $('your_selector').mrUploadFileButton({
      'maxFileSize': 0.1 // 0.1 ≈ 100 kb
    });
    
    $('your_selector').mrUploadFileButton({
      'maxFileSize': 1 // 1 mb
    });
    
     $('your_selector').mrUploadFileButton({
      'maxFileSize': 1024 // 1 gb
    });
```
Or use html data-attributes

```html 
    <input type="file"
                       id="demo1"
                       data-mr-upload-file-button="true"
                       data-max-file-size="0.1"
                       multiple />
```

## Demo
[link to demo]()

## License

**mr-upload-file-button** is released under the BSD 3-Clause License. See the bundled [`LICENSE.md`](/LICENSE.md) for details.nse. See the bundled [`LICENSE.md`]() for details.