
# Attribute `btnClassTitle`

Base info current attribute 

| attribute      | default                | type            |
| -----------    | --------------------   |---------------- |
| btnClassTitle  | mr-fu-file-style-title | string          |

## Description
This attribute is intended to css class caption selected file(s). 
You can replace default class or add your css class to default css class. 

## How to use
css
```css 
.hidden { display:none; }
```
js
```js
    $('your_selector').mrUploadFileButton({
      'btnClassTitle': 'mr-fu-file-style-title your-custom-css-class' // added to default css class
    });
    
     $('your_selector').mrUploadFileButton({
      'btnClassTitle': 'your-custom-css-class', // replace default class
    });

```

Or use html data-attributes

```html 
    <input type="file"
                       id="demo1"
                       data-mr-upload-file-button="true"
                       data-btn-class-title="your-custom-css-class"
                       multiple />
```


## License

**mr-upload-file-button** is released under the BSD 3-Clause License. See the bundled [`LICENSE.md`](/LICENSE.md) for details.
