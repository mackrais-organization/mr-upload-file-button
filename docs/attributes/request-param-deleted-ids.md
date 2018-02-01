
# Attribute `requestParamDeletedIDs`

Base info current attribute 

| attribute               | default                | type            |
| -----------             | --------------------   |---------------- |
| requestParamDeletedIDs  | deletedFileIDs         | string          |

## Description
This attribute is intended to name array item with deleted ids to request. See [request data](docs/attributes/ajax-options.md#request-data)

## How to use
```js
    $('your_selector').mrUploadFileButton({
      'requestParamDeletedIDs': 'deletedIDs'
    });
```

Or use html data-attributes

```html 
    <input type="file"
                       id="demo1"
                       data-mr-upload-file-button="true"
                       data-request-param-deleted-ids="deletedIDs"
                       multiple />
```

## Demo
[link to demo]()

## License

**mr-upload-file-button** is released under the BSD 3-Clause License. See the bundled [`LICENSE.md`](/LICENSE.md) for details.