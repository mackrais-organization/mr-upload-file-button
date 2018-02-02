
# Event `mr:fileUpload:ajaxBeforeSend`

## Parameters

| name            | type             |
| -----------     | ---------------- |
| event           | object           |
| jqXHR           | object           |
| PlainObject     | object           |

## Description

This event called before run ajax request. You can use to custom preloader. see [demo custom preloader]()

## Description parameters
All parameters are taken from the standard jquery $.ajax request see [here](http://api.jquery.com/jquery.ajax/#jQuery-ajax-settings)

## How to use

```js
    $('your_selector').on('mr:fileUpload:ajaxBeforeSend',function(event, jqXHR, PlainObject){
         // ... your code 
    })
```

## Demo
[link to demo]()

## License

**mr-upload-file-button** is released under the BSD 3-Clause License. See the bundled [`LICENSE.md`](/LICENSE.md) for details.
