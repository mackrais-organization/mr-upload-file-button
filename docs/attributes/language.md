
# Attribute `language`

Base info current attribute 

| attribute             | default                | type            |
| -----------           | --------------------   |---------------- |
| language              | en                     | string          |

## Description
This attribute corresponds to the current language of the plugin. Plugin support next languages:
- en - English
- uk - Ukrainian
- ru - Russian

**Note:** If you want create custom translations you need read more about next attribute:
- [translations]()
- see [demo custom translation]()

## How to use
```js
    $('your_selector').mrUploadFileButton({
      'language': 'uk' // Set Ukrainian language
    });

```

Or use html data-attributes

```html 
    <input type="file"
                       id="demo1"
                       data-mr-upload-file-button="true"
                       data-language="uk"
                       multiple />
```


## Demo
[link to demo]()

## License

**mr-upload-file-button** is released under the BSD 3-Clause License. See the bundled [`LICENSE.md`](/LICENSE.md) for details.
