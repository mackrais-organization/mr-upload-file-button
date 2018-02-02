
# Event `mr:fileUpload:beforeDeletePreview`

## Parameters

| name            | type             |
| -----------     | ---------------- |
| event           | object           |
| setting         | object           |
| $previewBlock   | object           |
| itemID          | integer          |
| title           | string           |
| blockIndex      | integer          |
| files           | object           |

## Description
This event called only, when the user delete preview item. You can use to ajax delete. see [demo custom ajax delete preview]()

## Description parameters
- **setting** - paramter has to item: `{'ajax':null, 'canDelete':true }`
  - **ajax** - if you want delete preview with ajax you must set ajax object this parameter. See see [demo custom ajax delete preview]() and [jQuery $.ajax](http://api.jquery.com/jquery.ajax/#jQuery-ajax-settings)
  - **canDelete** - default value `false`, If you want to prevent removal set `false` to this parameter
  
**Note:** These two parameters are independent. You can use the parameter `canDelete` without `ajax` and vice versa.

- **$previewBlock** - HTMLElement object current preview item block.
- **itemID** - ID item with attribute [`previewImageUrls`](docs/attributes/preview-image-urls.md)  if this it is new file,  value equal 0
- **title** - name file
- **blockIndex** - index current preview block
- **files** - object with list all files 

## How to use

```js
    $('your_selector').on('mr:fileUpload:beforeDeletePreview',function(event, setting, $previewBlock, itemID, title, blockIndex, files){
         // ... your code 
    })
```

## Demo
[link to demo]()

## License

**mr-upload-file-button** is released under the BSD 3-Clause License. See the bundled [`LICENSE.md`](/LICENSE.md) for details.
