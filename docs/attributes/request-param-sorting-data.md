
# Attribute `requestParamSortingData`

Base info current attribute 

| attribute               | default                | type            |
| -----------             | --------------------   |---------------- |
| requestParamSortingData | sortingData            | string          |

## Description
This attribute is intended to name array item with sorting data to request. See [request data](docs/attributes/ajax-options.md#request-data)

## How to use
```js
    $('your_selector').mrUploadFileButton({
      'requestParamSortingData': 'dataSort'
    });
```

Or use html data-attributes

```html 
    <input type="file"
                       id="demo1"
                       data-mr-upload-file-button="true"
                       data-request-param-sorting-data="dataSort"
                       multiple />
```

## Demo
[link to demo]()

## License

**mr-upload-file-button** is released under the BS