
# Attribute `disableSortable`

Base info current attribute 

| attribute            | default                | type            |
| -----------          | --------------------   |---------------- |
| disableSortable      | false                  | boolean         |

## Description
This attribute is responsible for sortable previews item. By default sortable is enabled.

## How to use
```js
    $('your_selector').mrUploadFileButton({
      'disableSortable': true // disabled sortable preview
    });

```

Or use html data-attributes

```html 
    <input type="file"
                       id="demo1"
                       data-mr-upload-file-button="true"
                       data-disable-sortable="true"
                       multiple />
```


## Demo
[link to demo]()

## License

**mr-upload-file-button** is released under the BSD 3-Clause License. See the bundled [`LICENSE.md`](/LICENSE.md) for details.
