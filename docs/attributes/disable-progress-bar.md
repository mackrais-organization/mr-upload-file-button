
# Attribute `disableProgressBar`

Base info current attribute 

| attribute            | default                | type            |
| -----------          | --------------------   |---------------- |
| disableProgressBar   | false                  | boolean         |

## Description
This attribute is responsible for displaying the progress bar at the time of loading. By default progress bar is enabled.

## How to use
```js
    $('your_selector').mrUploadFileButton({
      'disableProgressBar': true // disabled progress bar
    });

```

Or use html data-attributes

```html 
    <input type="file"
                       id="demo1"
                       data-mr-upload-file-button="true"
                       data-disable-progress-bar="true"
                       multiple />
```


## Demo
[link to demo]()

## License

**mr-upload-file-button** is released under the BSD 3-Clause License. See the bundled [`LICENSE.md`](LICENSE.md) for details.
