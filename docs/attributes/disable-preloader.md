
# Attribute `disablePreloader`

Base info current attribute 

| attribute            | default                | type            |
| -----------          | --------------------   |---------------- |
| disablePreloader     | false                  | boolean         |

## Description
This attribute is responsible for displaying the default preloader at the time of loading. By default preloader is 
enabled.

**Note:** Also you can create use custom preloader , before use you must disable default preloader and see [demo custom preloader]()

For use custom preloader you need read more for next events: 
- [mr:fileUpload:ajaxBeforeSend]()
- [mr:fileUpload:ajaxComplete]()

## How to use
```js
    $('your_selector').mrUploadFileButton({
      'disablePreloader': true // disabled default alerts
    });

```

Or use html data-attributes

```html 
    <input type="file"
                       id="demo1"
                       data-mr-upload-file-button="true"
                       data-disable-preloader="true"
                       multiple />
```


## Demo
[link to demo]()

## License

**mr-upload-file-button** is released under the BSD 3-Clause License. See the bundled [`LICENSE.md`](LICENSE.md) for details.
