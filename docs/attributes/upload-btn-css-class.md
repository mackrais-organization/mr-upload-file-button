
# Attribute `uploadBtnCssClass`

Base info current attribute 

| attribute          | default              | type            |
| -----------        | -------------------- |---------------- |
| uploadBtnCssClass  |                      | string          |

## Description

This attribute is intended to css class button select file. 
You can add your css class to default css class. 
Or hide button if you want upload file another button. see [demo upload in form]()

## How to use
css
```css 
.hidden { display:none; }
```
js
```js
    $('your_selector').mrUploadFileButton({
      'uploadBtnCssClass': 'your-custom-css-class' // add custom css class
    });
    
    $('your_selector').mrUploadFileButton({
      'uploadBtnCssClass': 'hidden' // hiden button `upload`
    });
```

Or use html data-attributes

```html 
    <input type="file"
                       id="demo1"
                       data-mr-upload-file-button="true"
                       data-upload-btn-css-class="your-custom-css-class"
                       multiple />
```


## Demo
[link to demo]()

## License

**mr-upload-file-button** is released under the BSD 3-Clause License. See the bundled [`LICENSE.md`](/LICENSE.md) for details.
