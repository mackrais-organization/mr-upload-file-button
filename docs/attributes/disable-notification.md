
# Attribute `disableNotification`

Base info current attribute 

| attribute            | default                | type            |
| -----------          | --------------------   |---------------- |
| disableNotification  | false                  | boolean         |

## Description
This attribute is responsible for generating standard alerts. By default alerts is enabled.

**Note:** Also you can create your custom alerts , before create you must disable default alerts and see [demo custom alerts]()

For create custom alerts you need read more for next events: 
- [mr:fileUpload:getError]()
- [mr:fileUpload:getWarning]()

## How to use
```js
    $('your_selector').mrUploadFileButton({
      'disableNotification': true // disabled default alerts
    });

```

Or use html data-attributes

```html 
    <input type="file"
                       id="demo1"
                       data-mr-upload-file-button="true"
                       data-disable-notification="true"
                       multiple />
```


## Demo
[link to demo]()

## License

**mr-upload-file-button** is released under the BSD 3-Clause License. See the bundled [`LICENSE.md`](/LICENSE.md) for details.
