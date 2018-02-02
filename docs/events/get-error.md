
# Event `mr:fileUpload:getError`

## Parameters

| name            | type             |
| -----------     | ---------------- |
| event           | object           |
| code            | integer          |
| message         | string           |
| typeError       | string           |


## Description

This event called when plugin get error from client or ajax. With this event, you can make custom error messages.

## Description parameters
- **code** - code error can be how http code error and custom  code error
  - clientLoad see all error codes [here](https://developer.mozilla.org/uk/docs/Web/API/FileError) or [here](https://www.dartdocs.org/documentation/controls_and_panels/0.8.0/controls_and_panels/FileError/ABORT_ERR-constant.html)
  - ajaxError  see all error codes [here](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes), and custom response error code 600 - when response status equeal 'error'
- **message** - text with message error
- **typeError** - has two value `clientLoad` or `ajaxError`


## How to use

```js
    $('your_selector').on('mr:fileUpload:getError',function(event, code, message, typeError){
         // ... your code 
    })
```

## Demo
[link to demo]()

## License

**mr-upload-file-button** is released under the BSD 3-Clause License. See the bundled [`LICENSE.md`](/LICENSE.md) for details.
