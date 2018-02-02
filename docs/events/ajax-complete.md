
# Event `mr:fileUpload:ajaxComplete`

## Parameters

| name            | type             |
| -----------     | ---------------- |
| event           | object           |
| jqXHR           | object           |
| textStatus      | object           |

## Description
This event called only, when the request completed. You can use to hide custom preloader. see [demo custom preloader]()

## Description parameters
All parameters are taken from the standard jquery $.ajax request see [here](http://api.jquery.com/jquery.ajax/#jQuery-ajax-settings)

## How to use

```js
    $('your_selector').on('mr:fileUpload:ajaxComplete',function(event, jqXHR, textStatus){
         // ... your code 
    })
```

## Demo
[link to demo]()

## License

**mr-upload-file-button** is released under the BSD 3-Clause License. See the bundled [`LICENSE.md`](/LICENSE.md) for details.
