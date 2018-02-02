
# Event `mr:fileUpload:ajaxDone`

## Parameters

| name            | type             |
| -----------     | ---------------- |
| event           | object           |
| data            | object           |
| jqXHR           | object           |
| PlainObject     | object           |

## Description

This event called when request response equal 2xx. You can use to make custom alert or other. see [demo custom alert]()

## Description parameters
All parameters are taken from the standard jquery $.ajax request see [here](http://api.jquery.com/jquery.ajax/#jQuery-ajax-settings)

-**data** - response from server see [request data](docs/attributes/ajax-options.md#request-data)


## How to use

```js
    $('your_selector').on('mr:fileUpload:ajaxDone',function(event, data, jqXHR, PlainObject){
         // ... your code 
    })
```

## Demo
[link to demo]()

## License

**mr-upload-file-button** is released under the BSD 3-Clause License. See the bundled [`LICENSE.md`](/LICENSE.md) for details.
