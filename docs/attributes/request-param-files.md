
# Attribute `requestParamFiles`

Base info current attribute 

| attribute               | default                | type            |
| -----------             | --------------------   |---------------- |
| requestParamFiles       | file                   | string          |

## Description
This attribute is intended to name array item with files to request. See [request data](docs/attributes/ajax-options.md#request-data)

## How to use
```js
    $('your_selector').mrUploadFileButton({
      'requestParamFiles': 'images'
    });
```

Or use html data-attributes

```html 
    <input type="file"
                       id="demo1"
                       data-mr-upload-file-button="true"
                       data-request-param-files="images"
                       multiple />
```

## Demo
[link to demo]()

## License

**mr-upload-file-button** is released under the BS