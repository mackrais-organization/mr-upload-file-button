
# Event `mr:fileUpload:ajaxError`

## Parameters

| name            | type             |
| -----------     | ---------------- |
| event           | object           |
| jqXHR           | object           |
| textStatus      | object           |
| errorThrown     | string           |

## Description

This event called when request response not equal 2xx. You can use to make custom alert or other. see [demo custom alert]()

## Description parameters
All parameters are taken from the standard jquery $.ajax request see [here](http://api.jquery.com/jquery.ajax/#jQuery-ajax-settings)

## How to use

```js
    $('your_selector').on('mr:fileUpload:ajaxError',function(event,jqXHR,textStatus,errorThrown){
         // ... your code 
    })
```

## Demo
[link to demo]()

## License

**mr-upload-file-button** is released under the BSD 3-Clause License. See the bundled [`LICENSE.md`](/LICENSE.md) for details.
