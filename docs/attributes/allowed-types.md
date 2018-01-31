
# Attribute `allowedTypes`

Base info current attribute 

| attribute      | default              | type            |
| -----------    | -------------------- |---------------- |
| allowedTypes   | .*                   | string          |

**Note:** If the attribute is empty then the used default value.

## Description

This attribute is intended to restrict types file by MIME Types. The attribute supports multiple types at the same time separated by a comma.
You can see a list with MIME Types [here](https://www.freeformatter.com/mime-types-list.html). or [here](https://en.wikipedia.org/wiki/Media_type) 

## How to use
```js
    $('your_selector').mrUploadFileButton({
      'allowedTypes': 'image/*' // only image
    });
    
     $('your_selector').mrUploadFileButton({
      'allowedTypes': 'image/gif,image/png' // only image and only extentions gif and png
    });
```

Or use html data-attributes

```html 
    <input type="file"
                       id="demo1"
                       data-mr-upload-file-button="true"
                       data-allowed-typese="image/*"
                       multiple />
```


## Demo
[link to demo]()

## License

**mr-upload-file-button** is released under the BSD 3-Clause License. See the bundled [`LICENSE.md`](LICENSE.md) for details.
