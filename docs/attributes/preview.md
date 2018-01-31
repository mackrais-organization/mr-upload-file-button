
# Attribute `preview`

Base info current attribute 

| attribute      | default                | type            |
| -----------    | --------------------   |---------------- |
| preview        | false                  | boolean         |

## Description
This attribute is intended to displaying preview item. By default preview is disabled.

## How to use
```js
    $('your_selector').mrUploadFileButton({
      'preview': true 
    });
```

Or use html data-attributes

```html 
    <input type="file"
                       id="demo1"
                       data-mr-upload-file-button="true"
                       data-preview="true"
                       multiple />
```


## Demo
[link to demo]()

## License

**mr-upload-file-button** is released under the BSD 3-Clause License. See the bundled [`LICENSE.md`](LICENSE.md) for details.