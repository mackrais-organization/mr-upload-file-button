
# Attribute `timeNotification`

Base info current attribute 

| attribute               | default                | type            | unit         |
| -----------             | --------------------   |---------------- |--------------|
| timeNotification        | 5000                   | integer         | milliseconds |

## Description
This attribute is intended to hide notification per a specific time.

**Note:** This attribute will only work if the [`disableNotification`](disable-notification.md) attribute is disabled


## How to use
```js
    $('your_selector').mrUploadFileButton({
      'timeNotification': 3000 // hide per 3 seconds
    });
```

Or use html data-attributes

```html 
    <input type="file"
                       id="demo1"
                       data-mr-upload-file-button="true"
                       data-time-notification="images"
                       multiple />
```

## Demo
[link to demo]()

## License

**mr-upload-file-button** is released under the BS