
# Attribute `btnClass`

Base info current attribute 

| attribute      | default              | type            |
| -----------    | -------------------- |---------------- |
| btnClass       | mr-fu-file-style-btn | string          |

## Description

This attribute is intended to css class button select file. 
You can replace default class or add your css class to default css class. 
Or hide button if you want only show drag and drop area see (demo only drag and drop area)

## How to use
css
```css 
.hidden { display:none; }
```
js
```js
    $('your_selector').mrUploadFileButton({
      'btnClass': 'mr-fu-file-style-btn your-custom-css-class' // added to default css class
    });
    
     $('your_selector').mrUploadFileButton({
      'btnClass': 'your-custom-css-class' // replace default class
    });
    
    $('your_selector').mrUploadFileButton({
      'btnClass': 'hidden' // hiden button `select file`
    });
```

Or use html data-attributes

```html 
    <input type="file"
                       id="demo1"
                       data-mr-upload-file-button="true"
                       data-btn-class="your-custom-css-class"
                       multiple />
```


## Demo
[link to demo]()

## License

**mr-upload-file-button** is released under the BSD 3-Clause License. See the bundled [`LICENSE.md`](LICENSE.md) for details.
